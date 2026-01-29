import { LitElement, html } from 'lit';
import { BingoGridCss } from "./css/BingoGrid.css.js";

class BingoGrid extends LitElement {
    static styles = [BingoGridCss];

    static properties = {
        items: { type: Array },
        marked: { type: Set },
        difficulty: { type: String },
        hasWon: { type: Boolean }
    };

    constructor() {
        super();
        this.items = [];
        this.marked = new Set([12]); // FREE square pre-marked
        this.difficulty = 'single';
        this.hasWon = false;
    }

    async firstUpdated() {
        await this.loadItems();
    }

    async loadItems() {
        try {
            const response = await fetch(new URL('./temp.json', import.meta.url));
            const data = await response.json();

            // Haal willekeurige items uit elke categorie
            const easyItems = this.getRandomItems(data.easy, 10);
            const mediumItems = this.getRandomItems(data.medium, 10);
            const hardItems = this.getRandomItems(data.hard, 4);

            // Combineer alle items (totaal 24)
            const allItems = [...easyItems, ...mediumItems, ...hardItems];

            // Shuffle de items voor een willekeurige volgorde
            const shuffled = this.shuffleArray(allItems);

            // Voeg FREE toe op positie 12 (midden)
            shuffled.splice(12, 0, "FREE");

            this.items = shuffled;
        } catch (error) {
            console.error("Failed to load bingo items:", error);
        }
    }

    getRandomItems(array, count) {
        if (!array || array.length === 0) {
            console.warn('Array is empty or undefined');
            return [];
        }

        // Als er minder items zijn dan gevraagd, return alle items
        if (array.length <= count) {
            return [...array];
        }

        // Shuffle en pak de eerste 'count' items
        const shuffled = this.shuffleArray([...array]);
        return shuffled.slice(0, count);
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    reset() {
        this.marked = new Set([12]);
        this.hasWon = false;
        this.loadItems(); // Laad nieuwe willekeurige items
        this.requestUpdate();
    }

    toggleSquare(index) {
        if (index === 12) return;

        if (this.marked.has(index)) {
            this.marked.delete(index);
        } else {
            this.marked.add(index);
        }
        this.requestUpdate();
        this.checkWin();
    }

    checkWin() {
        const hasValidBingo = this.hasValidBingo();

        // Als er een geldige bingo is en we nog niet gewonnen hebben, dispatch win event
        if (hasValidBingo && !this.hasWon) {
            this.hasWon = true;
            this.announceWin();
        }

        // Als er geen geldige bingo meer is, reset hasWon zodat opnieuw winnen mogelijk is
        if (!hasValidBingo && this.hasWon) {
            this.hasWon = false;
        }
    }

    hasValidBingo() {
        let requiredLines = 0;

        switch(this.difficulty) {
            case 'single':
                requiredLines = 1;
                break;
            case 'double':
                requiredLines = 2;
                break;
            case 'full':
                return this.marked.size === 25;
        }

        let completedLines = 0;

        // Check rows
        for (let i = 0; i < 5; i++) {
            const row = [i * 5, i * 5 + 1, i * 5 + 2, i * 5 + 3, i * 5 + 4];
            if (row.every(idx => this.marked.has(idx))) completedLines++;
        }

        // Check columns
        for (let i = 0; i < 5; i++) {
            const col = [i, i + 5, i + 10, i + 15, i + 20];
            if (col.every(idx => this.marked.has(idx))) completedLines++;
        }

        // Check diagonals
        const diag1 = [0, 6, 12, 18, 24];
        const diag2 = [4, 8, 12, 16, 20];
        if (diag1.every(idx => this.marked.has(idx))) completedLines++;
        if (diag2.every(idx => this.marked.has(idx))) completedLines++;

        return completedLines >= requiredLines;
    }

    announceWin() {
        this.dispatchEvent(new CustomEvent('win', {
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <section>
                ${this.items.map((text, index) => {
            const isMarked = this.marked.has(index);
            const isFree = index === 12;

            return html`
                        <button 
                            class="tile ${isFree ? 'free' : ''} ${isMarked ? 'marked' : ''}"
                            @click=${() => this.toggleSquare(index)}
                            ?disabled=${isFree}
                        >
                            ${isMarked && !isFree ? html`
                                <span class="checkmark">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                            ` : ''}
                            <span class="tile-text">${text}</span>
                        </button>
                    `;
        })}
            </section>
        `;
    }
}

customElements.define('bingo-grid', BingoGrid);