import { LitElement, html } from 'lit';
import { SuccessModalCss } from './css/SuccessModal.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';

class SuccessModal extends LitElement {
    static styles = [SuccessModalCss, TouchEffectsMixin];

    static properties = {
        open: { type: Boolean, reflect: true },
        code: { type: String },
        pressingButton: { type: String, state: true },
        copied: { type: Boolean, state: true },
        showWarning: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.code = '';
        this.pressingButton = null;
        this.copied = false;
        this.showWarning = false;
    }

    handleCopyCode() {
        soundManager.play('click');
        navigator.clipboard.writeText(this.code);
        this.copied = true;

        setTimeout(() => {
            this.copied = false;
        }, 2000);
    }

    handleCloseAttempt() {
        soundManager.play('click');
        this.showWarning = true;
    }

    handleConfirmClose() {
        soundManager.play('click');
        this.open = false;
        this.showWarning = false;
        this.copied = false;
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }

    handleCancelClose() {
        soundManager.play('click');
        this.showWarning = false;
    }

    handleTouchStart(button) {
        this.pressingButton = button;
    }

    handleTouchEnd() {
        this.pressingButton = null;
    }

    render() {
        if (!this.open) return html``;

        return html`
            <div class="modal-backdrop">
                <div class="modal">
                    ${this.showWarning ? html`
                        <div class="warning-overlay">
                            <div class="warning-box">
                                <svg class="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <circle cx="12" cy="17" r="0.5" fill="currentColor"></circle>
                                </svg>
                                <h3>Let op!</h3>
                                <p>Nadat je dit scherm sluit, kun je de code <strong>niet meer ophalen</strong>. Je moet dan een nieuwe kaart maken.</p>
                                <p class="warning-subtext">Zorg dat je de code hebt gekopieerd!</p>
                                <div class="warning-buttons">
                                    <button
                                        class="btn-warning-cancel touch-interactive ${this.pressingButton === 'warning-cancel' ? 'pressing' : ''}"
                                        @click=${this.handleCancelClose}
                                        @touchstart=${() => this.handleTouchStart('warning-cancel')}
                                        @touchend=${this.handleTouchEnd}
                                        @touchcancel=${this.handleTouchEnd}>
                                        Terug
                                    </button>
                                    <button
                                        class="btn-warning-confirm touch-interactive ${this.pressingButton === 'warning-confirm' ? 'pressing' : ''}"
                                        @click=${this.handleConfirmClose}
                                        @touchstart=${() => this.handleTouchStart('warning-confirm')}
                                        @touchend=${this.handleTouchEnd}
                                        @touchcancel=${this.handleTouchEnd}>
                                        Toch sluiten
                                    </button>
                                </div>
                            </div>
                        </div>
                    ` : ''}

                    <div class="modal-header">
                        <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h2>Kaart aangemaakt!</h2>
                        <button
                            class="close-btn touch-interactive ${this.pressingButton === 'close' ? 'pressing' : ''}"
                            @click=${this.handleCloseAttempt}
                            @touchstart=${() => this.handleTouchStart('close')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            aria-label="Sluiten">
                            ×
                        </button>
                    </div>

                    <div class="modal-body">
                        <p class="success-text">Je kaart is succesvol aangemaakt! Gebruik deze code om je kaart te delen:</p>
                        
                        <div class="code-display">
                            <span class="code">${this.code}</span>
                        </div>

                        <button
                            class="btn-copy touch-interactive ${this.pressingButton === 'copy' ? 'pressing' : ''} ${this.copied ? 'copied' : ''}"
                            @click=${this.handleCopyCode}
                            @touchstart=${() => this.handleTouchStart('copy')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}>
                            ${this.copied ? html`
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Gekopieerd!
                            ` : html`
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                                Kopieer Code
                            `}
                        </button>

                        <div class="info-box">
                            <svg class="info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                            <div>
                                <strong>Let op:</strong>
                                <p>Deze kaart wordt automatisch verwijderd na <strong>1&nbsp;maand</strong>.</p>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('success-modal', SuccessModal);