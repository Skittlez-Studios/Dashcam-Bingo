import { LitElement, html } from 'lit';
import { BingoGridCss } from "./css/BingoGrid.css.js";
import { soundManager } from '../SoundManager.js';
import { hapticManager} from "../HapticsManager.js";

class BingoGrid extends LitElement {
    static styles = [BingoGridCss];

    static properties = {
        items: { type: Array },
        marked: { type: Set },
        difficulty: { type: String },
        hasWon: { type: Boolean },
        longPressIndex: { type: Number },
        longPressTimer: { type: Number, state: true },
        wasLongPress: { type: Boolean, state: true },
        customCard: { type: Object },
        bingoCount: { type: Number, state: true }
    };

    constructor() {
        super();
        this.items = [];
        this.marked = new Set([12]); // FREE square pre-marked
        this.difficulty = 'single';
        this.hasWon = false;
        this.longPressIndex = null;
        this.longPressTimer = null;
        this.wasLongPress = false;
        this.customCard = null;
        this.bingoCount = 0;
    }

    async firstUpdated() {
        if (!this.customCard) {
            await this.loadItems();
        }
    }

    updated(changedProperties) {
        if (changedProperties.has('customCard')) {
            if (this.customCard) {
                this.loadCustomCard();
            } else if (changedProperties.get('customCard') !== undefined) {
                this.loadItems();
            }
        }
    }

    loadCustomCard() {
        const items = this.customCard.items;

        // Check of het 24 of 25 items zijn
        if (items.length === 24) {
            // 24 items = gratis vakje in het midden
            const itemsWithFree = [...items];
            itemsWithFree.splice(12, 0, { title: "Gratis", description: "Gratis vakje!" });
            this.items = itemsWithFree;
            this.marked = new Set([12]); // Pre-mark free tile
        } else if (items.length === 25) {
            // 25 items = geen gratis vakje
            this.items = items;
            this.marked = new Set(); // Geen pre-marked tiles
        } else {
            console.error('Invalid card: must have 24 or 25 items');
            return;
        }

        this.hasWon = false;
        this.requestUpdate();
    }

    async loadItems() {
        try {
            const response = await fetch(new URL('./temp.json', import.meta.url));
            const data = await response.json();

            const easyItems = this.getRandomItems(data.easy, 10);
            const mediumItems = this.getRandomItems(data.medium, 10);
            const hardItems = this.getRandomItems(data.hard, 4);

            const allItems = [...easyItems, ...mediumItems, ...hardItems];
            const shuffled = this.shuffleArray(allItems);

            shuffled.splice(12, 0, { title: "Gratis", description: "Gratis vakje!" });

            this.items = shuffled;
            this.marked = new Set([12]);
        } catch (error) {
            console.error("Failed to load bingo items:", error);
        }
    }

    getRandomItems(array, count) {
        if (!array || array.length === 0) {
            console.warn('Array is empty or undefined');
            return [];
        }

        if (array.length <= count) {
            return [...array];
        }

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
        this.customCard = null;
        this.bingoCount = 0;

        if (this.items.length === 25 && this.items[12]?.title === "Gratis") {
            this.marked = new Set([12]);
        } else {
            this.marked = new Set();
        }

        this.hasWon = false;
        this.loadItems();
        this.requestUpdate();
    }

    getTooltipClass(index) {
        const col = index % 5;

        if (col === 0) return 'tooltip-left';
        if (col === 1) return 'tooltip-left-center';
        if (col === 3) return 'tooltip-right-center';
        if (col === 4) return 'tooltip-right';
        return 'tooltip-center';
    }

    handlePressStart(index, event) {
        const isFree = this.items[index]?.title === "Gratis";
        if (isFree) return;

        this.wasLongPress = false;

        this.longPressTimer = setTimeout(() => {
            this.wasLongPress = true;
            this.longPressIndex = index;
            this.requestUpdate();
        }, 150);
    }

    handlePressEnd(index, event) {
        const isFree = this.items[index]?.title === "Gratis";
        if (isFree) return;

        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }

        setTimeout(() => {
            this.longPressIndex = null;
            this.wasLongPress = false;
            this.requestUpdate();
        }, 50);
    }

    handlePressMove() {
        if (this.longPressTimer) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }

        this.longPressIndex = null;
        this.wasLongPress = false;
        this.requestUpdate();
    }

    toggleSquare(index, event) {
        const isFree = this.items[index]?.title === "Gratis";
        if (isFree) return;

        if (this.wasLongPress) {
            event.preventDefault();
            return;
        }

        if (this.marked.has(index)) {
            hapticManager.vibrate(5);
            soundManager.play("uncheck");
            this.marked.delete(index);
        } else {
            soundManager.play("check");
            hapticManager.vibrate(10);
            this.marked.add(index);
        }
        this.requestUpdate();
        this.checkWin();
    }

    checkWin() {
        if (this.difficulty === 'marathon') {
            const currentBingoCount = this.countCompletedLines();
            if (currentBingoCount !== this.bingoCount) {
                if (currentBingoCount > this.bingoCount) {
                    soundManager.play("pling");
                }
                this.bingoCount = currentBingoCount;
                this.dispatchEvent(new CustomEvent('bingo-count-update', {
                    detail: { count: this.bingoCount },
                    bubbles: true,
                    composed: true
                }));

                this.requestUpdate();
            }
            return;
        }

        const hasValidBingo = this.hasValidBingo();

        if (hasValidBingo && !this.hasWon) {
            this.hasWon = true;
            soundManager.play("win");
            this.announceWin();
        }

        if (!hasValidBingo && this.hasWon) {
            this.hasWon = false;
        }
    }



    countCompletedLines() {
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

        return completedLines;
    }

    hasValidBingo() {
        const completedLines = this.countCompletedLines();

        switch(this.difficulty) {
            case 'single':
                return completedLines >= 1;
            case 'double':
                return completedLines >= 2;
            case 'full':
                return this.marked.size === 25;
            case 'marathon':
                return false; // Never win in marathon mode
            default:
                return false;
        }
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
                ${this.items.map((item, index) => {
            const isMarked = this.marked.has(index);
            const isFree = item?.title === "Gratis";
            const showTooltip = this.longPressIndex === index;
            const title = typeof item === 'string' ? item : item.title;
            const description = typeof item === 'string' ? '' : item.description;
            const tooltipClass = this.getTooltipClass(index);

            return html`
                        <div class="tile-container">
                            ${showTooltip && description ? html`
                                <div class="tooltip ${tooltipClass}">
                                    ${description}
                                </div>
                            ` : ''}
                            <button
                                class="tile ${isFree ? 'free' : ''} ${isMarked ? 'marked' : ''} ${showTooltip ? 'long-pressing' : ''}"
                                @click=${(e) => this.toggleSquare(index, e)}
                                @mousedown=${(e) => this.handlePressStart(index, e)}
                                @mouseup=${(e) => this.handlePressEnd(index, e)}
                                @mouseleave=${() => this.handlePressMove()}
                                @touchstart=${(e) => this.handlePressStart(index, e)}
                                @touchend=${(e) => this.handlePressEnd(index, e)}
                                @touchmove=${() => this.handlePressMove()}
                                @contextmenu=${(e) => e.preventDefault()}
                                ?disabled=${isFree}
                            >
                                ${isMarked && !isFree ? html`
                                    <span class="checkmark">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                ` : ''}
                                <span class="tile-text">${title}</span>
                            </button>
                        </div>
                    `;
        })}
            </section>
        `;
    }
}

customElements.define('bingo-grid', BingoGrid);