import { LitElement, html } from 'lit';
import { HeaderButtonsCss } from './css/HeaderButtons.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';
import {hapticManager} from "../HapticsManager.js";

class HeaderButtons extends LitElement {
    static styles = [HeaderButtonsCss, TouchEffectsMixin];

    static properties = {
        pressingButton: { type: String, state: true }
    };

    constructor() {
        super();
        this.pressingButton = null;
    }

    handleCreateCard() {
        soundManager.play('click');
        hapticManager.vibrate(2);
        this.dispatchEvent(new CustomEvent('open-create-modal', {
            bubbles: true,
            composed: true
        }));
    }

    handleLoadCard() {
        soundManager.play('click');
        hapticManager.vibrate(2);
        this.dispatchEvent(new CustomEvent('open-load-modal', {
            bubbles: true,
            composed: true
        }));
    }

    handleTouchStart(button) {
        this.pressingButton = button;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    render() {
        return html`
            <div class="buttons-container">
                <button
                        class="btn touch-interactive ${this.pressingButton === 'load' ? 'pressing' : ''}"
                        @click=${this.handleLoadCard}
                        @touchstart=${() => this.handleTouchStart('load')}
                        @touchend=${this.handleTouchEnd}
                        @touchcancel=${this.handleTouchEnd}
                        title="Laad Kaart">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </button>
                <button
                        class="btn touch-interactive ${this.pressingButton === 'create' ? 'pressing' : ''}"
                        @click=${this.handleCreateCard}
                        @touchstart=${() => this.handleTouchStart('create')}
                        @touchend=${this.handleTouchEnd}
                        @touchcancel=${this.handleTouchEnd}
                        title="Maak Kaart">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
            </div>
        `;
    }
}

customElements.define('header-buttons', HeaderButtons);