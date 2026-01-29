import { LitElement, html, css } from 'lit';
import './bingo-grid/BingoGrid.js';

class DashcamApp extends LitElement {
  static styles = css`
    :host {
      display: flex;
      font-family: system-ui;
      padding: 1rem;
      flex-direction: column;
      width: 100%;
    }
      
    h1 {
      text-align: center;
    }
    button {
      font-size: 1.2rem;
      padding: 1rem;
      width: 100%;
    }
  `;

  render() {
    return html`
      <h1>🚗 Dashcam Bingo</h1>
      <bingo-grid></bingo-grid>
    `;
  }
}

customElements.define('dashcam-app', DashcamApp);
