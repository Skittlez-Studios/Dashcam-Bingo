import { css } from 'lit';

export const DifficultySelectorCss = css`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --muted: #334155;
        --radius: 0.75rem;

        /* Progressieve moeilijkheidskleuren: groen → oranje → rood */
        --easy-light: #10b981;
        --easy-dark: #059669;

        --medium-light: #f59e0b;
        --medium-dark: #d97706;

        --hard-light: #ef4444;
        --hard-dark: #dc2626;

        --marathon-light: #a855f7;
        --marathon-dark: #7e22ce;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        padding: 1rem;
        animation: fade-in 0.2s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem;
        max-width: 900px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        margin-top: 4rem;
        max-height: calc(100vh - 5rem);
        overflow-y: auto;
    }

    @keyframes slide-up {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    h1 {
        color: var(--foreground);
        font-size: 2rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        text-align: center;
    }

    h2 {
        color: var(--foreground);
        font-size: 1rem;
        font-weight: 400;
        margin: 0 0 0.5rem 0;
        text-align: center;
    }

    .subtitle {
        color: var(--muted-foreground);
        margin: 0 0 2rem 0;
        text-align: center;
        font-size: 1rem;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }

    .difficulty-btn {
        all: unset;
        display: grid;
        grid-template-rows: auto auto auto; /* Icon, title, description */
        align-items: center;
        justify-items: center;
        gap: 0.75rem;
        padding: 2rem 1.5rem;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
        color: var(--foreground);
    }

    .icon-wrapper {
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        flex-shrink: 0;
    }

    /* Groen = Makkelijk */
    .icon-wrapper-green {
        background: linear-gradient(135deg, var(--easy-light) 0%, var(--easy-dark) 100%);
    }

    /* Oranje = Gemiddeld */
    .icon-wrapper-orange {
        background: linear-gradient(135deg, var(--medium-light) 0%, var(--medium-dark) 100%);
    }

    /* Rood = Moeilijk */
    .icon-wrapper-red {
        background: linear-gradient(135deg, var(--hard-light) 0%, var(--hard-dark) 100%);
    }

    /* Paars = Marathon (infinite) */
    .icon-wrapper-purple {
        background: linear-gradient(135deg, var(--marathon-light) 0%, var(--marathon-dark) 100%);
    }

    .icon {
        width: 3.5rem;
        height: 3.5rem;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .difficulty-btn:hover {
            background: #475569;
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
        }

        .difficulty-btn:hover .icon-wrapper {
            transform: scale(1.1);
        }

        .difficulty-btn:hover .icon-wrapper-green {
            box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-orange {
            box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-red {
            box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-purple {
            box-shadow: 0 10px 25px -5px rgba(168, 85, 247, 0.6);
        }
    }

    .difficulty-btn:active {
        transform: translateY(-2px);
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--foreground);
        text-align: center;
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    }

    .description {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-align: center;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        line-height: 1.4;
        padding: 0 0.5rem;
    }

    .custom-card-banner {
        background: rgba(16, 185, 129, 0.15);
        border: 1px solid rgba(16, 185, 129, 0.3);
        border-radius: 0.5rem;
        padding: 0.625rem 0.875rem 0.625rem 1rem;
        margin: 0 auto 1.5rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: fit-content;
        position: relative;
    }

    .banner-icon {
        width: 1.125rem;
        height: 1.125rem;
        color: #10b981;
        flex-shrink: 0;
    }

    .banner-text {
        font-size: 0.9375rem;
        color: var(--muted-foreground);
        white-space: nowrap;
    }

    .banner-text strong {
        color: #10b981;
        font-weight: 700;
        font-family: 'Courier New', monospace;
        letter-spacing: 0.05em;
    }

    .remove-card-btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.25rem;
        height: 1.25rem;
        margin-left: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;
        flex-shrink: 0;
        opacity: 0.6;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .remove-card-btn svg {
        width: 1rem;
        height: 1rem;
        color: #94a3b8;
        transition: color 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        .remove-card-btn:hover {
            opacity: 1;
            background: rgba(239, 68, 68, 0.1);
        }

        .remove-card-btn:hover svg {
            color: #ef4444;
        }
    }

    .remove-card-btn:active,
    .remove-card-btn.pressing {
        transform: scale(0.9);
        opacity: 1;
    }

    .remove-card-btn.pressing svg {
        color: #ef4444;
    }

    /* ✅ Mobile breakpoint (768px) */
    @media (max-width: 768px) {
        .modal {
            max-width: 600px;
            padding: 1.5rem; /* ✅ Kleiner */
            margin-top: 5rem;
        }

        h1 {
            font-size: 1.5rem; /* ✅ Kleiner */
        }

        .subtitle {
            font-size: 0.875rem; /* ✅ Kleiner */
            margin-bottom: 1.25rem;
        }

        .buttons {
            grid-template-columns: 1fr;
            gap: 0.625rem; /* ✅ Kleiner */
        }

        .difficulty-btn {
            padding: 1.125rem; /* ✅ Compacter */
            grid-template-columns: auto 1fr;
            grid-template-rows: auto auto;
            column-gap: 1rem; /* ✅ Kleiner */
            row-gap: 0.375rem;
            align-items: center;
            justify-items: start;
        }

        .icon-wrapper {
            width: 3.25rem; /* ✅ Kleiner */
            height: 3.25rem;
            min-width: 3.25rem;
            grid-row: 1 / 3;
            grid-column: 1;
            border-radius: 0.625rem;
        }

        .icon {
            width: 2.25rem; /* ✅ Kleiner */
            height: 2.25rem;
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
            height: auto;
            font-size: 1rem; /* ✅ Kleiner */
        }

        .description {
            grid-row: 2;
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
            align-items: flex-start;
            height: auto;
            font-size: 0.75rem; /* ✅ Kleiner */
            padding: 0;
            line-height: 1.3;
        }

        .custom-card-banner {
            padding: 0.5rem 0.75rem;
            margin-bottom: 1rem;
        }

        .banner-icon {
            width: 1rem;
            height: 1rem;
        }

        .banner-text {
            font-size: 0.8125rem; /* ✅ Kleiner */
        }

        .remove-card-btn {
            width: 1.125rem;
            height: 1.125rem;
        }

        .remove-card-btn svg {
            width: 0.875rem;
            height: 0.875rem;
        }
    }

    /* ✅ Extra small screens */
    @media (max-width: 400px) {
        .modal {
            padding: 1.25rem;
            margin-top: 4.5rem;
        }

        h1 {
            font-size: 1.375rem;
        }

        .difficulty-btn {
            padding: 1rem;
            column-gap: 0.875rem;
        }

        .icon-wrapper {
            width: 3rem;
            height: 3rem;
            min-width: 3rem;
        }

        .icon {
            width: 2rem;
            height: 2rem;
        }

        .title {
            font-size: 0.9375rem;
        }

        .description {
            font-size: 0.6875rem;
        }
    }
`;