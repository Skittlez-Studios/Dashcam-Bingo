import { LitElement, html } from 'lit';
import { LoadCardModalCss } from './css/LoadCardModal.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';
import { getCard } from '../utils/supabase.js';
import {hapticManager} from "../HapticsManager.js";

class LoadCardModal extends LitElement {
    static styles = [LoadCardModalCss, TouchEffectsMixin];

    static properties = {
        open: { type: Boolean, reflect: true },
        code: { type: String, state: true },
        pressingButton: { type: String, state: true },
        error: { type: String, state: true },
        isLoading: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.code = '';
        this.pressingButton = null;
        this.error = '';
        this.isLoading = false;
    }

    handleBackdropClick(e) {
        if (e.target.classList.contains('modal-backdrop') && !this.isLoading) {
            soundManager.play('click');
            hapticManager.vibrate(2);
            this.close();
        }
    }

    handleCloseButton() {
        if (this.isLoading) return;
        soundManager.play('click');
        hapticManager.vibrate(2);
        this.close();
    }

    close() {
        this.open = false;
        this.code = '';
        this.error = '';
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }

    handleInput(e) {
        let value = e.target.value.replace(/\D/g, ''); // Alleen cijfers
        if (value.length > 6) {
            value = value.slice(0, 6);
        }
        this.code = value;
        this.error = '';
    }

    async handleLoad() {
        soundManager.play('click');
        hapticManager.vibrate(2);

        if (this.code.length !== 6) {
            this.error = 'Code moet 6 cijfers zijn';
            return;
        }

        this.isLoading = true;
        this.error = '';

        try {
            const card = await getCard(this.code);

            this.isLoading = false;
            this.open = false;

            this.dispatchEvent(new CustomEvent('card-loaded', {
                detail: {
                    items: card.items,
                    code: card.code
                },
                bubbles: true,
                composed: true
            }));

            this.code = '';
            this.error = '';

        } catch (error) {
            console.error('Error loading card:', error);
            this.error = error.message;
            this.isLoading = false;
        }
    }

    handleKeydown(e) {
        if (e.key === 'Escape' && this.open && !this.isLoading) {
            this.handleCloseButton();
        }
        if (e.key === 'Enter' && this.code.length === 6 && !this.isLoading) {
            this.handleLoad();
        }
    }

    handleTouchStart(button) {
        this.pressingButton = button;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('keydown', this.handleKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.handleKeydown);
    }

    render() {
        if (!this.open) return html``;

        return html`
            <div class="modal-backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    ${this.isLoading ? html`
                        <div class="loading-overlay">
                            <div class="spinner"></div>
                            <p>Kaart wordt geladen...</p>
                        </div>
                    ` : ''}

                    <div class="modal-header">
                        <h2>Laad je Bingo Kaart</h2>
                        <button
                            class="close-btn touch-interactive ${this.pressingButton === 'close' ? 'pressing' : ''}"
                            @click=${this.handleCloseButton}
                            @touchstart=${() => this.handleTouchStart('close')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isLoading}
                            aria-label="Sluiten">
                            ×
                        </button>
                    </div>

                    <div class="modal-body">
                        <p class="instructions">Voer je 6-cijferige kaart code in:</p>

                        <div class="code-input-wrapper">
                            <input
                                type="text"
                                inputmode="numeric"
                                pattern="[0-9]*"
                                class="code-input ${this.error ? 'error' : ''}"
                                placeholder="000000"
                                .value=${this.code}
                                @input=${this.handleInput}
                                maxlength="6"
                                ?disabled=${this.isLoading}
                                autofocus
                            />
                            ${this.error ? html`
                                <span class="error-message">${this.error}</span>
                            ` : ''}
                        </div>

                        <div class="info-box">
                            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <p>Deze code heb je gekregen na het aanmaken van een eigen kaart.</p>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button
                            class="btn-cancel touch-interactive ${this.pressingButton === 'cancel' ? 'pressing' : ''}"
                            @click=${this.handleCloseButton}
                            @touchstart=${() => this.handleTouchStart('cancel')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isLoading}>
                            Annuleren
                        </button>
                        <button
                            class="btn-load touch-interactive ${this.pressingButton === 'load' ? 'pressing' : ''}"
                            @click=${this.handleLoad}
                            @touchstart=${() => this.handleTouchStart('load')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isLoading || this.code.length !== 6}>
                            ${this.isLoading ? html`
                                <span class="btn-spinner"></span>
                                Laden...
                            ` : 'Laden'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('load-card-modal', LoadCardModal);