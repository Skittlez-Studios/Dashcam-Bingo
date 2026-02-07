import { LitElement, html } from 'lit';
import { CreateCardModalCss } from './css/CreateCardModal.css.js';
import { TouchEffectsMixin } from '../TouchEffects.css.js';
import { soundManager } from '../SoundManager.js';
import { hapticManager } from '../HapticsManager.js';
import { createCard } from '../utils/supabase.js';
import { offlineDetector } from '../utils/OfflineDetector.js';

class CreateCardModal extends LitElement {
    static styles = [CreateCardModalCss, TouchEffectsMixin];

    static properties = {
        open: { type: Boolean, reflect: true },
        tiles: { type: Array, state: true },
        pressingButton: { type: String, state: true },
        errors: { type: Object, state: true },
        showErrorPopup: { type: Boolean, state: true },
        errorMessage: { type: String, state: true },
        hasFreeTile: { type: Boolean, state: true },
        isSubmitting: { type: Boolean, state: true },
        isOffline: { type: Boolean, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.tiles = this.initializeTiles();
        this.pressingButton = null;
        this.errors = {};
        this.showErrorPopup = false;
        this.errorMessage = '';
        this.hasFreeTile = true;
        this.isSubmitting = false;
        this.isOffline = !offlineDetector.check();
        this.handleConnectionChange = this.handleConnectionChange.bind(this);
    }

    initializeTiles() {
        return Array(25).fill(null).map((_, i) => ({
            title: '',
            description: '',
            disabled: false
        }));
    }

    handleConnectionChange(e) {
        this.isOffline = !e.detail.isOnline;
    }


    handleFreeTileToggle(index, e) {
        soundManager.play('click');
        hapticManager.vibrate(2)
        const tile = this.tiles[index];
        tile.disabled = e.target.checked;

        if (tile.disabled) {
            tile.title = '';
            tile.description = '';
            delete this.errors[`${index}-title`];
            delete this.errors[`${index}-description`];
        }

        this.requestUpdate();
    }

    handleBackdropClick(e) {
        if (e.target.classList.contains('modal-backdrop')) {
            soundManager.play('click');
            hapticManager.vibrate(2)
            this.open = false;
            this.resetErrors();
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        }
    }

    handleCloseButton() {
        soundManager.play('click');
        hapticManager.vibrate(2)
        this.open = false;
        this.resetErrors();
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }

    resetErrors() {
        this.errors = {};
        this.showErrorPopup = false;
        this.errorMessage = '';
        this.tiles = this.initializeTiles();
    }

    validateTile(index, field, value) {
        const maxLengths = {
            title: 40,
            description: 100
        };

        const errorKey = `${index}-${field}`;

        if (this.tiles[index].disabled) {
            delete this.errors[errorKey];
            return true;
        }

        if (!value.trim()) {
            this.errors[errorKey] = `${field === 'title' ? 'Titel' : 'Beschrijving'} mag niet leeg zijn`;
            return false;
        }

        if (value.length > maxLengths[field]) {
            this.errors[errorKey] = `Max ${maxLengths[field]} karakters (${value.length}/${maxLengths[field]})`;
            return false;
        }

        delete this.errors[errorKey];
        return true;
    }

    handleInput(index, field, e) {
        const value = e.target.value;
        this.tiles[index][field] = value;
        this.validateTile(index, field, value);
        this.requestUpdate();
    }

    validateAllTiles() {
        let isValid = true;
        const newErrors = {};

        this.tiles.forEach((tile, index) => {
            if (tile.disabled) return;

            if (!tile.title.trim()) {
                newErrors[`${index}-title`] = 'Titel mag niet leeg zijn';
                isValid = false;
            } else if (tile.title.length > 40) {
                newErrors[`${index}-title`] = `Max 40 karakters (${tile.title.length}/40)`;
                isValid = false;
            }

            if (!tile.description.trim()) {
                newErrors[`${index}-description`] = 'Beschrijving mag niet leeg zijn';
                isValid = false;
            } else if (tile.description.length > 100) {
                newErrors[`${index}-description`] = `Max 100 karakters (${tile.description.length}/100)`;
                isValid = false;
            }
        });

        this.errors = newErrors;
        return isValid;
    }

    async handleCreate() {
        soundManager.play('click');
        hapticManager.vibrate(2)

        if (!this.validateAllTiles()) {
            this.errorMessage = 'Vul alle velden correct in';
            this.showErrorPopup = true;

            setTimeout(() => {
                this.showErrorPopup = false;
            }, 4000);

            this.scrollToFirstError();
            return;
        }

        this.isSubmitting = true;

        try {
            const items = this.tiles
                .filter(tile => !tile.disabled)
                .map(tile => ({
                    title: tile.title.trim(),
                    description: tile.description.trim()
                }));

            const response = await createCard(items);

            this.open = false;
            this.tiles = this.initializeTiles();
            this.resetErrors();
            this.isSubmitting = false;

            this.dispatchEvent(new CustomEvent('card-created', {
                detail: { code: response.code },
                bubbles: true,
                composed: true
            }));

        } catch (error) {
            console.error('Error creating card:', error);
            this.errorMessage = error.message;
            this.showErrorPopup = true;
            this.isSubmitting = false;

            setTimeout(() => {
                this.showErrorPopup = false;
            }, 4000);
        }
    }

    scrollToFirstError() {
        setTimeout(() => {
            const firstError = this.shadowRoot.querySelector('.input-error, .textarea-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    handleKeydown(e) {
        if (e.key === 'Escape' && this.open && !this.isSubmitting) {
            this.handleCloseButton();
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
        window.addEventListener('connection-change', this.handleConnectionChange);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('keydown', this.handleKeydown);
        window.removeEventListener('connection-change', this.handleConnectionChange);
    }

    getErrorMessage(index, field) {
        return this.errors[`${index}-${field}`];
    }

    hasError(index, field) {
        return !!this.errors[`${index}-${field}`];
    }

    render() {
        if (!this.open) return html``;

        const errorCount = Object.keys(this.errors).length;

        return html`
            <div class="modal-backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    ${this.isSubmitting ? html`
                        <div class="loading-overlay">
                            <div class="spinner"></div>
                            <p>Kaart wordt aangemaakt...</p>
                        </div>
                    ` : ''}

                    ${this.showErrorPopup ? html`
                        <div class="error-popup">
                            <svg class="error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <div>
                                <strong>Aanmaken mislukt</strong>
                                <p>${this.errorMessage || `${errorCount} ${errorCount === 1 ? 'veld bevat een fout' : 'velden bevatten fouten'}`}</p>
                            </div>
                        </div>
                    ` : ''}

                    <div class="modal-header">
                        <h2>Maak je eigen Bingo Kaart</h2>
                        <button
                            class="close-btn touch-interactive ${this.pressingButton === 'close' ? 'pressing' : ''}"
                            @click=${this.handleCloseButton}
                            @touchstart=${() => this.handleTouchStart('close')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isSubmitting}
                            aria-label="Sluiten">
                            ×
                        </button>
                    </div>

                    <div class="modal-body">
                        ${this.isOffline ? html`
                            <div class="offline-warning">
                                <svg class="offline-icon" role="img" aria-label="Geen internetverbinding" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2.88 8.15a13.94 13.94 0 0 1 18.24 0"></path>
                                    <path d="M6.46 11.73a9.96 9.96 0 0 1 11.08 0"></path>
                                    <path d="M10.04 15.31a5.98 5.98 0 0 1 3.92 0"></path>
                                    <circle cx="12" cy="18.5" r="0.8" fill="currentColor" stroke="none"></circle>
                                    <line x1="3" y1="3" x2="21" y2="21"></line>
                                </svg>

                                <h3>Geen internetverbinding</h3>
                                <p>Je hebt een internetverbinding nodig om een kaart aan te maken.</p>
                            </div>
                        ` : html`
                        <div class="tiles-list">
                            ${this.tiles.map((tile, index) => {
            const isMiddle = index === 12;
            return html`
                                    <div class="tile-item ${tile.disabled ? 'disabled' : ''}">
                                        <div class="tile-number-badge ${tile.disabled ? 'free' : ''}">${tile.disabled ? '🎉' : index + 1}</div>

                                        <div class="tile-content">
                                            ${isMiddle ? html`
                                                <div class="free-tile-toggle-row">
                                                    <label class="toggle-label">
                                                        <input
                                                            type="checkbox"
                                                            class="toggle-checkbox"
                                                            .checked=${tile.disabled}
                                                            @change=${(e) => this.handleFreeTileToggle(index, e)}
                                                            ?disabled=${this.isSubmitting}
                                                        />
                                                        <span class="toggle-slider"></span>
                                                        <span class="toggle-text">Gratis vakje</span>
                                                    </label>
                                                </div>
                                            ` : ''}

                                            <div class="tile-title-row">
                                                <div class="input-wrapper">
                                                    <input
                                                        type="text"
                                                        class="title-input ${this.hasError(index, 'title') ? 'input-error' : ''}"
                                                        placeholder="${tile.disabled ? 'Gratis vakje (niet invullen)' : 'Titel...'}"
                                                        .value=${tile.title}
                                                        ?disabled=${tile.disabled || this.isSubmitting}
                                                        @input=${(e) => this.handleInput(index, 'title', e)}
                                                        maxlength="50"
                                                    />
                                                    ${this.hasError(index, 'title') ? html`
                                                        <span class="error-message">${this.getErrorMessage(index, 'title')}</span>
                                                    ` : ''}
                                                </div>
                                            </div>

                                            <div class="description-row">
                                                <div class="connector-line"></div>
                                                <div class="input-wrapper">
                                                    <textarea
                                                        class="description-input ${this.hasError(index, 'description') ? 'textarea-error' : ''}"
                                                        placeholder="${tile.disabled ? 'Automatisch ingevuld' : 'Beschrijving...'}"
                                                        .value=${tile.description}
                                                        ?disabled=${tile.disabled || this.isSubmitting}
                                                        @input=${(e) => this.handleInput(index, 'description', e)}
                                                        rows="2"
                                                        maxlength="150"
                                                    ></textarea>
                                                    ${this.hasError(index, 'description') ? html`
                                                        <span class="error-message">${this.getErrorMessage(index, 'description')}</span>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                `;
        })}
                        </div>
                        `}
                    </div>

                    <div class="modal-footer">
                        <button
                            class="btn-cancel touch-interactive ${this.pressingButton === 'cancel' ? 'pressing' : ''}"
                            @click=${this.handleCloseButton}
                            @touchstart=${() => this.handleTouchStart('cancel')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isSubmitting}>
                            Annuleren
                        </button>
                        <button
                            class="btn-create touch-interactive ${this.pressingButton === 'create' ? 'pressing' : ''}"
                            @click=${this.handleCreate}
                            @touchstart=${() => this.handleTouchStart('create')}
                            @touchend=${this.handleTouchEnd}
                            @touchcancel=${this.handleTouchEnd}
                            ?disabled=${this.isSubmitting || this.isOffline}>
                            ${this.isSubmitting ? html`
                                <span class="btn-spinner"></span>
                                Maken...
                            ` : 'Maken'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('create-card-modal', CreateCardModal);