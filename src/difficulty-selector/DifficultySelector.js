import { LitElement, html } from 'lit';
import { DifficultySelectorCss } from './css/DifficultySelector.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';

class DifficultySelector extends LitElement {
    static styles = [DifficultySelectorCss, TouchEffectsMixin];

    static properties = {
        pressingButton: { type: String, state: true }
    };

    constructor() {
        super();
        this.pressingButton = null;
    }

    selectDifficulty(difficulty) {
        this.dispatchEvent(new CustomEvent('difficulty-selected', {
            detail: { difficulty },
            bubbles: true,
            composed: true
        }));
    }

    handleTouchStart(difficulty) {
        this.pressingButton = difficulty;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    render() {
        return html`
            <div class="backdrop">
                <div class="modal">
                    <h2>Kies je moeilijkheidsgraad</h2>
                    <p class="subtitle">Selecteer hoe je wilt spelen</p>

                    <div class="buttons">
                        <button 
                            class="difficulty-btn touch-interactive ${this.pressingButton === 'single' ? 'pressing' : ''}"
                            @click=${() => this.selectDifficulty('single')}
                            @touchstart=${() => this.handleTouchStart('single')}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            @contextmenu=${(e) => e.preventDefault()}
                        >
                            <span class="icon">📍</span>
                            <span class="title">Enkele Rij</span>
                            <span class="description">1 rij bingo</span>
                        </button>

                        <button 
                            class="difficulty-btn touch-interactive ${this.pressingButton === 'double' ? 'pressing' : ''}"
                            @click=${() => this.selectDifficulty('double')}
                            @touchstart=${() => this.handleTouchStart('double')}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            @contextmenu=${(e) => e.preventDefault()}
                        >
                            <span class="icon">📍📍</span>
                            <span class="title">Dubbele Rij</span>
                            <span class="description">2 rijen bingo</span>
                        </button>

                        <button 
                            class="difficulty-btn touch-interactive ${this.pressingButton === 'full' ? 'pressing' : ''}"
                            @click=${() => this.selectDifficulty('full')}
                            @touchstart=${() => this.handleTouchStart('full')}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${(e) => e.preventDefault()}
                        >
                            <span class="icon">🏆</span>
                            <span class="title">Volle Kaart</span>
                            <span class="description">Alle vakjes</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('difficulty-selector', DifficultySelector);