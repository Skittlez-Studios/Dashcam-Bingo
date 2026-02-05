import { LitElement, html } from 'lit';
import { HelpModalCss } from './css/HelpModal.css.js';
import { soundManager } from '../SoundManager.js';
import {hapticManager} from "../HapticsManager.js";

class HelpModal extends LitElement {
    static styles = HelpModalCss;

    static properties = {
        open: { type: Boolean },
        currentPage: { type: Number, state: true },
        touchStartX: { type: Number, state: true },
        touchEndX: { type: Number, state: true }
    };

    constructor() {
        super();
        this.open = false;
        this.currentPage = 0;
        this.pages = [
            'intro',
            'what-are-dashcams',
            'rules',
            'where-to-find'
        ];
        this.touchStartX = 0;
        this.touchEndX = 0;
    }

    updated(changedProperties) {
        if (changedProperties.has('open') && this.open) {
            this.currentPage = 0;
        }
    }

    handleClose() {
        soundManager.play('click');
        hapticManager.vibrate(2)
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true,
            composed: true
        }));
    }

    handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            this.handleClose();
        }
    }

    nextPage() {
        soundManager.play('click');
        hapticManager.vibrate(2)
        if (this.currentPage < this.pages.length - 1) {
            this.currentPage++;
        }
    }

    prevPage() {
        soundManager.play('click');
        hapticManager.vibrate(2)
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }

    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }

    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }

    handleSwipe() {
        const swipeThreshold = 75; // Minimum swipe distance in pixels
        const difference = this.touchStartX - this.touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Swipe left - next page
                this.nextPage();
            } else {
                // Swipe right - previous page
                this.prevPage();
            }
        }
    }

    renderPage() {
        switch(this.pages[this.currentPage]) {
            case 'intro':
                return html`
                    <section>
                        <h3>Wat is Dashcam Bingo?</h3>
                        <p>Het is de bedoeling dat Dashcam Bingo gespeeld wordt tijdens het kijken van dashcamvideo's. Het doel is om zo snel mogelijk <strong>bingo</strong> te krijgen.</p>
                        <br>
                        <p>Bingo behaal je door goed op te letten tijdens een dashcamvideo. Je start met een bingokaart vol met verschillende verkeersacties. Als je tijdens het kijken een van die acties ziet plaatsvinden, vink je dat vakje af.</p>
                        <br>
                        <p>Voordat je begint, kies je een moeilijkheidsgraad. Als je alle vakjes van de bijbehorende moeilijkheidsgraad hebt afgevinkt, heb je <strong>bingo</strong>.</p>
                        <br>
                        <p>Dashcam Bingo speel je het beste samen.</p>
                    </section>
                `;

            case 'what-are-dashcams':
                return html`
                    <section>
                        <h3>Wat zijn dashcam videos?</h3>
                        <p>Dashcam video’s zijn beelden die zijn opgenomen met een kleine camera die achter de voorruit (of soms achterruit) van een auto is gemonteerd.</p>
                        <br>
                        <p>De dashcam begint automatisch met filmen zodra de auto start. De camera slaat beelden op in korte fragmenten. Wanneer een gebruiker een moment handmatig markeert — of wanneer de camera zelf een botsing detecteert — wordt dit fragment beveiligd opgeslagen zodat het later teruggekeken kan worden.</p>
                        <br>
                        <p>Veel van deze beelden belanden online in zogenaamde compilatievideo's. Dit gebeurt vaak om asociaal weggedrag aan de kaak te stellen of puur ter vermaak.</p>
                    </section>
                `;

            case 'rules':
                return html`
                    <section>
                        <h3>Spelregels</h3>
                        <ol>
                            <li><strong>Kies je moeilijkheidsgraad:</strong>
                                <ul>
                                    <li><span class="badge green">I</span> Enkele Rij - 1 rij om bingo te halen</li>
                                    <li><span class="badge orange">II</span> Dubbele Rij - 2 rijen om bingo te halen</li>
                                    <li><span class="badge red">III</span> Volle Kaart - Alle vakjes om bingo te halen</li>
                                    <li><span class="badge purple">V</span> Bingo Teller - Scoor zoveel mogelijk bingo's</li>
                                </ul>
                            </li>
                            <li><strong>Start een dashcam video</strong> op een ander scherm</li>
                            <li><strong>Vink de verkeersacties af</strong> van jouw bingokaart</li>
                            <li><strong>Bingo!</strong> wanneer je het doel hebt gehaald</li>
                        </ol>
                    </section>
                `;

            case 'where-to-find':
                return html`
                    <section>
                        <h3>Waar vind ik dashcam videos?</h3>
                        <p>Zoek op YouTube naar "dashcam videos" of "dashcam compilatie", of kijk een video van een van de kanalen hieronder:</p>
                        <ul class="link-list">
                            <li>
                                <a href="https://www.youtube.com/@Dashcam-Nederland" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dashcam Nederland
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@DutchDashcam" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dutch Dashcam
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/playlist?list=PLMe_6SSHyqcY0-mRCiQseShc4uY3KPPYt" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dumpert Dashcam Playlist
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@DASHCAMIDIOTSNEDERLAND/featured" target="_blank" rel="noopener noreferrer">
                                    <svg class="link-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                    </svg>
                                    Dashcam Idiots Nederland
                                </a>
                            </li>
                        </ul>
                    </section>
                `;
        }
    }

    render() {
        if (!this.open) return html``;

        return html`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <button class="close-btn" @click=${this.handleClose} aria-label="Sluiten">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="icon-container">
                        <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <h2>Uitleg Dashcam Bingo</h2>

                    <div 
                        class="content"
                        @touchstart=${this.handleTouchStart}
                        @touchend=${this.handleTouchEnd}
                    >
                        ${this.renderPage()}
                    </div>

                    <div class="pagination">
                        <button 
                            class="nav-btn" 
                            @click=${this.prevPage}
                            ?disabled=${this.currentPage === 0}
                            aria-label="Vorige pagina"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div class="page-indicator">
                            ${this.pages.map((_, index) => html`
                                <span class="dot ${index === this.currentPage ? 'active' : ''}"></span>
                            `)}
                        </div>

                        <button 
                            class="nav-btn" 
                            @click=${this.nextPage}
                            ?disabled=${this.currentPage === this.pages.length - 1}
                            aria-label="Volgende pagina"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <button class="btn-close-bottom" @click=${this.handleClose}>
                        Begrepen, laten we spelen!
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('help-modal', HelpModal);