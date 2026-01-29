import { LitElement, html, css } from 'lit';
import './bingo-grid/BingoGrid.js';
import './difficulty-selector/DifficultySelector.js';
import './reset-button/ResetButton.js';
import './confirmation-modal/ConfirmationModal.js';
import './winner-modal/WinnerModal.js';

class DashcamApp extends LitElement {
    static styles = css`
        :host {
            display: flex;
            font-family: system-ui;
            padding: 1rem;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            max-height: 100vh;
            background: #0f172a;
            overflow: hidden;
        }

        h1 {
            text-align: center;
            color: #f1f5f9;
            margin-bottom: 2rem;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            overflow: hidden;
        }
    `;

    static properties = {
        gameStarted: { type: Boolean },
        difficulty: { type: String },
        showConfirmation: { type: Boolean },
        showWinner: { type: Boolean }
    };

    constructor() {
        super();
        this.gameStarted = false;
        this.difficulty = '';
        this.showConfirmation = false;
        this.showWinner = false;
    }

    connectedCallback() {
        super.connectedCallback();
        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Restore scrolling when component is removed
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
    }

    handleDifficultySelect(e) {
        this.difficulty = e.detail.difficulty;
        this.gameStarted = true;
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

    resetGame() {
        this.gameStarted = false;
        this.difficulty = '';
        this.shadowRoot.querySelector('bingo-grid')?.reset();
    }

    render() {
        return html`
      <h1>🚗 Dashcam Bingo</h1>
      
      <div class="game-container">
        <bingo-grid 
          .difficulty=${this.difficulty}
          @win=${this.handleWin}>
        </bingo-grid>
        ${this.gameStarted ? html`
          <reset-button @reset-requested=${this.handleResetRequest}></reset-button>
        ` : ''}
      </div>

      ${!this.gameStarted ? html`
        <difficulty-selector 
          @difficulty-selected=${this.handleDifficultySelect}>
        </difficulty-selector>
      ` : ''}

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
    `;
    }
}

customElements.define('dashcam-app', DashcamApp);