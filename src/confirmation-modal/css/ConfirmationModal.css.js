import { css } from 'lit';

export const ConfirmationModalCss = css`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --destructive: #ef4444;
        --radius: 0.75rem;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
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
        max-width: 400px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
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

    h3 {
        color: var(--foreground);
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
    }

    p {
        color: var(--muted-foreground);
        margin: 0 0 1.5rem 0;
        line-height: 1.5;
    }

    .buttons {
        display: flex;
        gap: 0.75rem;
        flex-direction: column-reverse;
    }

    .btn {
        all: unset;
        padding: 0.75rem 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    .btn-cancel {
        background: #334155;
        border: 2px solid var(--border);
        color: var(--foreground);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover {
            background: #475569;
        }
    }

    .btn-confirm {
        background: var(--destructive);
        border: 2px solid transparent;
        color: white;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-confirm:hover {
            background: #dc2626;
            box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.4);
        }
    }

    .btn:active {
        transform: scale(0.98);
    }

    @media (min-width: 640px) {
        .buttons {
            flex-direction: row;
            justify-content: flex-end;
        }
    }
`;