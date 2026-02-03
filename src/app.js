import { LitElement, html, css } from 'lit';
import './bingo-grid/BingoGrid.js';
import './difficulty-selector/DifficultySelector.js';
import './reset-button/ResetButton.js';
import './confirmation-modal/ConfirmationModal.js';
import './winner-modal/WinnerModal.js';
import './sound-toggle/SoundToggle.js';
import './help-menu/HelpButton.js';
import './help-menu/HelpModal.js';
import './header-buttons/HeaderButtons.js';
import './create-card-modal/CreateCardModal.js';
import './create-card-modal/SuccessModal.js';
import './load-card-modal/LoadCardModal.js';

class DashcamApp extends LitElement {
    static styles = css`
        :host {
            display: flex;
            font-family: system-ui;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            height: 100dvh;
            background: #0f172a;
            overflow: hidden;
            box-sizing: border-box;
            padding: 1rem;
        }

        .left-buttons {
            position: absolute;
            top: 1rem;
            left: 1rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            z-index: 100;
        }

        .right-buttons {
            position: absolute;
            top: 1rem;
            right: 1rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            z-index: 100;
        }

        .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .title-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        h1 {
            text-align: center;
            margin: 0;
            flex-shrink: 0;
            font-size: 2.25rem;
            font-weight: 700;
            color: #f1f5f9;
            letter-spacing: -0.025em;
        }

        .title-underline {
            width: 120px;
            height: 3px;
            background: linear-gradient(90deg,
            transparent 0%,
            #3b82f6 50%,
            transparent 100%
            );
            border-radius: 2px;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        @media (max-width: 640px) {
            :host {
                padding: 0.5rem;
            }

            .left-buttons {
                top: 0.5rem;
                left: 0.5rem;
            }

            .right-buttons {
                top: 0.5rem;
                right: 0.5rem;
            }

            .content-wrapper {
                gap: 1rem;
            }

            h1 {
                font-size: 1.75rem;
            }

            .title-underline {
                width: 100px;
                height: 2.5px;
            }

            .game-container {
                gap: 0.75rem;
            }
        }

        @media (max-width: 400px) {
            :host {
                padding: 0.25rem;
            }

            .content-wrapper {
                gap: 0.75rem;
            }

            h1 {
                font-size: 1.5rem;
            }

            .title-underline {
                width: 80px;
                height: 2px;
            }

            .game-container {
                gap: 0.5rem;
            }
        }

        .card-indicator {
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
            margin: 0 auto;
        }

        .card-label {
            font-size: 1.5rem;
            font-weight: 500;
            color: #94a3b8;
        }

        .card-code {
            font-size: 1.5rem;
            font-weight: 700;
            color: #10b981;
            font-family: 'Courier New', monospace;
            letter-spacing: 0.1em;
        }

        @media (max-width: 640px) {
            .card-label {
                font-size: 1.2rem;
            }

            .card-code {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 400px) {
            .card-label {
                font-size: 1rem;
            }

            .card-code {
                font-size: 1rem;
            }
        }
    `;

    static properties = {
        gameStarted: { type: Boolean },
        difficulty: { type: String },
        showConfirmation: { type: Boolean },
        showWinner: { type: Boolean },
        showHelp: { type: Boolean },
        showCreateModal: { type: Boolean },
        showSuccessModal: { type: Boolean },
        cardCode: { type: String },
        showLoadModal: { type: Boolean },
        loadedCard: { type: Object }
    };

    constructor() {
        super();
        this.gameStarted = false;
        this.difficulty = '';
        this.showConfirmation = false;
        this.showWinner = false;
        this.showHelp = false;
        this.showCreateModal = false;
        this.showSuccessModal = false;
        this.cardCode = '';
        this.showLoadModal = false;
        this.loadedCard = null;
    }

    connectedCallback() {
        super.connectedCallback();
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.body.style.width = '100%';
        document.body.style.height = '100%';

        this.addEventListener('open-create-modal', this.handleOpenCreateModal);
        this.addEventListener('card-created', this.handleCardCreated);
        this.addEventListener('open-load-modal', this.handleOpenLoadModal);
        this.addEventListener('card-loaded', this.handleCardLoaded);
        this.addEventListener('remove-custom-card', this.handleRemoveCustomCard);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    handleCardCreated(e) {
        this.cardCode = e.detail.code;
        this.showSuccessModal = true;
        this.showCreateModal = false;
    }

    handleSuccessModalClose() {
        this.showSuccessModal = false;
        this.cardCode = '';

        const createModal = this.shadowRoot.querySelector('create-card-modal');
        if (createModal) {
            createModal.open = false;
            createModal.resetErrors();
        }
    }

    handleOpenCreateModal() {
        this.showCreateModal = true;
    }

    handleCreateModalClose() {
        this.showCreateModal = false;
    }

    handleOpenLoadModal() {
        this.showLoadModal = true;
    }

    handleCardLoaded(e) {
        this.showLoadModal = false;
        this.loadedCard = e.detail;
        this.gameStarted = false;
    }

    handleRemoveCustomCard() {
        this.loadedCard = null;
        this.gameStarted = false;
        this.difficulty = '';

        const grid = this.shadowRoot.querySelector('bingo-grid');
        if (grid) {
            grid.customCard = null;
            grid.reset();
        }

        this.requestUpdate();
    }

    handleDifficultySelect(e) {
        this.difficulty = e.detail.difficulty;
        this.gameStarted = true;

        if (this.loadedCard) {
            setTimeout(() => {
                const grid = this.shadowRoot.querySelector('bingo-grid');
                if (grid) {
                    grid.customCard = this.loadedCard;
                }
            }, 0);
        }
    }

    handleResetRequest() {
        this.showConfirmation = true;
    }

    handleConfirmReset(e) {
        if (e.detail.confirmed) {
            this.resetGame();
        }
        this.showConfirmation = false;
    }

    handleCancelReset() {
        this.showConfirmation = false;
    }

    handleWin() {
        this.showWinner = true;
    }

    handleCloseWinner() {
        this.showWinner = false;
    }

    handlePlayAgain() {
        this.showWinner = false;
        this.resetGame();
    }

    handleHelpOpen() {
        this.showHelp = true;
    }

    handleHelpClose() {
        this.showHelp = false;
    }

    resetGame() {
        this.gameStarted = false;
        this.difficulty = '';
        this.loadedCard = null;
        this.shadowRoot.querySelector('bingo-grid')?.reset();
    }

    render() {
        return html`
            <div class="left-buttons">
                <help-button @help-requested=${this.handleHelpOpen}></help-button>
                <sound-toggle></sound-toggle>
            </div>

            <div class="right-buttons">
                <header-buttons></header-buttons>
            </div>

            <div class="content-wrapper">
                <div class="title-container">
                    <h1>Dashcam Bingo</h1>
                    <div class="title-underline"></div>
                </div>

                ${this.gameStarted && this.loadedCard ? html`
                    <div class="card-indicator">
                        <span class="card-label">Kaart:</span>
                        <span class="card-code">${this.loadedCard.code}</span>
                    </div>
                ` : ''}
                <div class="game-container">
                    <bingo-grid
                            .difficulty=${this.difficulty}
                            .customCard=${this.loadedCard}
                            @win=${this.handleWin}>
                    </bingo-grid>
                    ${this.gameStarted ? html`
                        <reset-button @reset-requested=${this.handleResetRequest}></reset-button>
                    ` : ''}
                </div>
            </div>

            ${!this.gameStarted ? html`
                <difficulty-selector
                        .customCard=${this.loadedCard}
                        @difficulty-selected=${this.handleDifficultySelect}>
                </difficulty-selector>
            ` : ''}

            <help-modal
                    .open=${this.showHelp}
                    @close=${this.handleHelpClose}>
            </help-modal>

            <confirmation-modal
                    ?open=${this.showConfirmation}
                    @confirm=${this.handleConfirmReset}
                    @cancel=${this.handleCancelReset}>
            </confirmation-modal>

            <winner-modal
                    ?open=${this.showWinner}
                    @close=${this.handleCloseWinner}
                    @play-again=${this.handlePlayAgain}>
            </winner-modal>

            <create-card-modal
                    ?open=${this.showCreateModal}
                    @close=${this.handleCreateModalClose}>
            </create-card-modal>

            <load-card-modal
                    ?open=${this.showLoadModal}
                    @close=${() => this.showLoadModal = false}>
            </load-card-modal>

            <success-modal
                    ?open=${this.showSuccessModal}
                    .code=${this.cardCode}
                    @close=${this.handleSuccessModalClose}>
            </success-modal>
        `;
    }
}

customElements.define('dashcam-app', DashcamApp);