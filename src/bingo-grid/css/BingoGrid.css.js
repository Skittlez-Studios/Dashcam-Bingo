import { css } from "lit";

export const BingoGridCss = css`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --muted-foreground: #94a3b8;
        --foreground: #f1f5f9;
        --primary: #3b82f6;
        --primary-foreground: #ffffff;
        --border: rgba(71, 85, 105, 0.5);
        --accent: #475569;
        --radius: 0.75rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.5rem;
        width: min(90vw, 600px);
        margin: 0 auto;
        padding: 1rem;
        background: var(--card);
        border-radius: var(--radius);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
    }

    .tile {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        font-size: clamp(0.75rem, 2vw, 0.875rem);
        font-weight: 500;
        text-align: center;
        padding: 0.75rem;
        aspect-ratio: 1;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--foreground);
        overflow: hidden;
        box-sizing: border-box;

        /* Voorkom text selectie en blauw highlight */
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        /* Voorkom context menu op lang indrukken */
        touch-action: manipulation;
    }

    /* Hover alleen voor devices met pointer (desktop) */
    @media (hover: hover) and (pointer: fine) {
        .tile:not(.free):hover {
            background: var(--accent);
            border-color: var(--muted-foreground);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }
    }

    /* Long-press effect voor touch devices */
    .tile:not(.free).long-pressing {
        background: var(--accent);
        border-color: var(--muted-foreground);
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }

    .tile:not(.free):active {
        transform: translateY(0);
    }

    .tile.marked:not(.free) {
        background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
        border-color: #34d399;
        color: var(--primary-foreground);
        box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
    }

    @media (hover: hover) and (pointer: fine) {
        .tile.marked:not(.free):hover {
            background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
            box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
        }
    }

    .tile.marked:not(.free).long-pressing {
        background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
        box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
    }

    .tile.free {
        background: linear-gradient(to bottom right, var(--primary), #2563eb);
        color: var(--primary-foreground);
        font-weight: 600;
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        border-color: #60a5fa;
        box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        cursor: default;
    }

    .tile-text {
        position: relative;
        z-index: 1;
        word-wrap: break-word;
        line-height: 1.3;
        /* Extra bescherming tegen selectie */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkmark {
        position: absolute;
        top: 0.375rem;
        right: 0.375rem;
        width: 1.25rem;
        height: 1.25rem;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 2;
        animation: checkmark-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        /* Voorkom selectie van checkmark */
        pointer-events: none;
    }

    .checkmark svg {
        width: 0.75rem;
        height: 0.75rem;
        color: #059669;
    }

    @keyframes checkmark-pop {
        0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        section {
            width: 95vw;
            gap: 0.375rem;
            padding: 0.75rem;
        }

        .tile {
            font-size: clamp(0.65rem, 2.5vw, 0.75rem);
            padding: 0.5rem;
        }

        .tile.free {
            font-size: clamp(0.875rem, 3vw, 1rem);
        }

        .checkmark {
            width: 1rem;
            height: 1rem;
            top: 0.25rem;
            right: 0.25rem;
        }

        .checkmark svg {
            width: 0.625rem;
            height: 0.625rem;
        }
    }
`;