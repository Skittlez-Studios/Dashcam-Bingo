import { css } from 'lit';

export const SoundToggleCss = css`
    :host {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .icon {
        width: 1.5rem;
        height: 1.5rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        button:hover .icon {
            transform: scale(1.1);
        }
    }

    button:active {
        transform: scale(0.95);
    }

    button.disabled {
        opacity: 0.6;
    }

    button.disabled .icon {
        color: #ef4444;
    }

    @media (max-width: 640px) {
        :host {
            top: 0.5rem;
            right: 0.5rem;
        }

        button {
            width: 2.5rem;
            height: 2.5rem;
        }

        .icon {
            width: 1.25rem;
            height: 1.25rem;
        }
    }
`;