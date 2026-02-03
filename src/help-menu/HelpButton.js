import { LitElement, html } from 'lit';
import { HelpButtonCss } from './css/HelpButton.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';

class HelpButton extends LitElement {
    static styles = [HelpButtonCss, TouchEffectsMixin];

    static properties = {
        pressing: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.pressing = false;
    }

    handleClick() {
        soundManager.play('click');
        this.dispatchEvent(new CustomEvent('help-requested', {
            bubbles: true,
            composed: true
        }));
    }

    handleTouchStart() {
        this.pressing = true;
    }

    handleTouchEnd() {
        this.pressing = false;
    }

    render() {
        return html`
            <button 
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchcancel=${this.handleTouchEnd}
                class="touch-interactive ${this.pressing ? 'pressing' : ''}"
                aria-label="Help"
                title="Help">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <circle cx="12" cy="17" r="0.5" fill="currentColor"></circle>
                </svg>
            </button>
        `;
    }
}

customElements.define('help-button', HelpButton);