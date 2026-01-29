import { LitElement, html } from 'lit';
import { ConfirmationModalCss } from './css/ConfirmationModal.css.js';

class ConfirmationModal extends LitElement {
    static styles = [ConfirmationModalCss];

    static properties = {
        open: { type: Boolean }
    };

    constructor() {
        super();
        this.open = false;
    }

    handleConfirm() {
        this.dispatchEvent(new CustomEvent('confirm', {
            detail: { confirmed: true },
            bubbles: true,
            composed: true
        }));
    }

    handleCancel() {
        this.dispatchEvent(new CustomEvent('cancel', {
            bubbles: true,
            composed: true
        }));
    }

    handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.handleCancel();
        }
    }

    render() {
        if (!this.open) return html``;

        return html`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal">
          <h3>Weet je het zeker?</h3>
          <p>Je huidige voortgang gaat verloren en het spel wordt gereset.</p>
          
          <div class="buttons">
            <button class="btn btn-cancel" @click=${this.handleCancel}>
              Nee, annuleren
            </button>
            <button class="btn btn-confirm" @click=${this.handleConfirm}>
              Ja, opnieuw beginnen
            </button>
          </div>
        </div>
      </div>
    `;
    }
}

customElements.define('confirmation-modal', ConfirmationModal);