import { LitElement, html, css } from 'lit';
import { BingoGridCss } from "./css/BingoGrid.css.js";

class BingoGrid extends LitElement {
    static styles = [BingoGridCss];

    static properties = {
        items: { type: Array },
        marked: { type: Set }
    };

    constructor() {
        super();
        this.items = [];
        this.marked = new Set([12]); // FREE square pre-marked
    }

    async firstUpdated() {
        try {
            const response = await fetch(new URL('./temp.json', import.meta.url));
            const data = await response.json();

            console.log(data);

            const board = [...data.items];
            board.splice(12, 0, "FREE");

            this.items = board;
        } catch (error) {
            console.error("Failed to load bingo items:", error);
        }
    }

    toggleSquare(index) {
        if (index === 12) return; // Don't allow toggling FREE square

        if (this.marked.has(index)) {
            this.marked.delete(index);
        } else {
            this.marked.add(index);
        }
        this.requestUpdate();
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