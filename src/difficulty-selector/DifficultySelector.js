import { LitElement, html } from 'lit';
import { DifficultySelectorCss } from './css/DifficultySelector.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';
import {hapticManager} from "../HapticsManager.js";

class DifficultySelector extends LitElement {
    static styles = [DifficultySelectorCss, TouchEffectsMixin];

    static properties = {
        pressingButton: { type: String, state: true },
        customCard: { type: Object }
    };

    constructor() {
        super();
        this.pressingButton = null;
        this.customCard = null;
    }

    selectDifficulty(difficulty) {
        soundManager.play('click');
        hapticManager.vibrate(2)
        this.dispatchEvent(new CustomEvent('difficulty-selected', {
            detail: { difficulty },
            bubbles: true,
            composed: true
        }));
    }

    handleRemoveCard(e) {
        e.stopPropagation();
        soundManager.play('click');
        hapticManager.vibrate(2)
        this.dispatchEvent(new CustomEvent('remove-custom-card', {
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
                <div class="modal" data-nosnippet>
                    <h1>Welkom bij Dashcam Bingo</h1>
                    <h2 class="subtitle">Kies je moeilijkheidsgraad om het spel te beginnen</h2>
                    ${this.customCard ? html`
                    <div class="custom-card-banner">
                        <svg class="banner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span class="banner-text">Eigen kaart geladen: <strong>${this.customCard.code}</strong></span>
                        <button 
                                class="remove-card-btn touch-interactive ${this.pressingButton === 'remove' ? 'pressing' : ''}"
                                @click=${this.handleRemoveCard}
                                @touchstart=${() => this.handleTouchStart('remove')}
                                @touchend=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                title="Verwijder kaart"
                                aria-label="Verwijder kaart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                    </div>
                ` : ''}

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
                            <div class="icon-wrapper icon-wrapper-green">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Enkele Rij</span>
                            <span class="description">Win door 1 rij horizontaal, verticaal of diagonaal af te vinken</span>
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
                            <div class="icon-wrapper icon-wrapper-orange">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Dubbele Rij</span>
                            <span class="description">Win door 2 rijen horizontaal, verticaal of diagonaal af te vinken</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton === 'full' ? 'pressing' : ''}"
                                @click=${() => this.selectDifficulty('full')}
                                @touchstart=${() => this.handleTouchStart('full')}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${(e) => e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-red">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>
                                    <circle cx="6" cy="22" r="2.5" fill="white"/>
                                    <circle cx="14" cy="22" r="2.5" fill="white"/>
                                    <circle cx="22" cy="22" r="2.5" fill="white"/>
                                </svg>
                            </div>
                            <span class="title">Volle Kaart</span>
                            <span class="description">Win door alle vakjes af te vinken en de bingo kaart compleet te maken</span>                        
                        </button>
                        <button
                            class="difficulty-btn touch-interactive ${this.pressingButton === 'marathon' ? 'pressing' : ''}"
                            @click=${() => this.selectDifficulty('marathon')}
                            @touchstart=${() => this.handleTouchStart('marathon')}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            @contextmenu=${(e) => e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-purple">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="6" cy="22" r="2.5" fill="white"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="white"/>
                            </div>
                            <span class="title">Bingo Teller</span>
                            <span class="description">Verzamel zo veel mogelijk bingos met de automatische bingoteller</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('difficulty-selector', DifficultySelector);