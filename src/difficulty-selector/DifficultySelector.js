import { LitElement, html } from 'lit';
import { DifficultySelectorCss } from './css/DifficultySelector.css.js';

class DifficultySelector extends LitElement {
    static styles = [DifficultySelectorCss];

    selectDifficulty(difficulty) {
        this.dispatchEvent(new CustomEvent('difficulty-selected', {
            detail: { difficulty },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <div class="backdrop">
                <div class="modal">
                    <h2>Kies je moeilijkheidsgraad</h2>
                    <p class="subtitle">Selecteer hoe je wilt spelen</p>

                    <div class="buttons">
                        <button class="difficulty-btn" @click=${() => this.selectDifficulty('single')}>
                            <span class="icon">📍</span>
                            <span class="title">Enkele Rij</span>
                            <span class="description">1 rij bingo</span>
                        </button>

                        <button class="difficulty-btn" @click=${() => this.selectDifficulty('double')}>
                            <span class="icon">📍📍</span>
                            <span class="title">Dubbele Rij</span>
                            <span class="description">2 rijen bingo</span>
                        </button>

                        <button class="difficulty-btn" @click=${() => this.selectDifficulty('full')}>
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