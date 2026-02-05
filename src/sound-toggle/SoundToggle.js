import { LitElement, html, css } from 'lit';
import { soundManager } from '../SoundManager.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { SoundToggleCss } from './css/SoundToggle.css.js';
import { hapticManager } from '../HapticsManager.js';

class SoundToggle extends LitElement {
    static styles = [SoundToggleCss, TouchEffectsMixin];

    static properties = {
        enabled: { type: Boolean, state: true },
        pressing: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.enabled = soundManager.isEnabled();
        this.pressing = false;
        this.handleSoundToggle = this.handleSoundToggle.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('sound-toggled', this.handleSoundToggle);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('sound-toggled', this.handleSoundToggle);
    }

    handleSoundToggle(e) {
        this.enabled = e.detail.enabled;
    }

    toggle() {
        this.enabled = soundManager.toggle();

        if (this.enabled) {
            hapticManager.vibrate(2);
            soundManager.play('click');
        }
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
                @click=${this.toggle}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchcancel=${this.handleTouchEnd}
                class="touch-interactive ${this.enabled ? '' : 'disabled'} ${this.pressing ? 'pressing' : ''}"
                title="${this.enabled ? 'Geluid uitschakelen' : 'Geluid inschakelen'}"
                aria-label="${this.enabled ? 'Geluid uitschakelen' : 'Geluid inschakelen'}"
            >
                ${this.enabled ? html`
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                ` : html`
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                `}
            </button>
        `;
    }
}

customElements.define('sound-toggle', SoundToggle);