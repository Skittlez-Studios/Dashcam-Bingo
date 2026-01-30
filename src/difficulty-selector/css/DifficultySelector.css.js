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
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
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

    h2 {
        color: var(--foreground);
        font-size: 1.875rem;
        font-weight: 600;
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
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .difficulty-btn {
        all: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 2rem 1.5rem;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
        min-height: 200px;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .difficulty-btn:hover {
            background: #475569;
            border-color: var(--primary);
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
        }
    }

    .difficulty-btn:active {
        transform: translateY(-2px);
    }

    .icon {
        font-size: 3.5rem;
        line-height: 1;
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--foreground);
        text-align: center;
    }

    .description {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-align: center;
    }

    @media (max-width: 768px) {
        .modal {
            max-width: 600px;
        }

        .buttons {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .difficulty-btn {
            padding: 1.5rem;
            min-height: auto;
            flex-direction: row;
            text-align: left;
            gap: 1rem;
        }

        .icon {
            font-size: 2.5rem;
            min-width: 3rem;
        }

        .title {
            font-size: 1.125rem;
        }

        .description {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 640px) {
        .modal {
            padding: 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        .subtitle {
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
        }
    }
`;