import { css } from 'lit';

export const HeaderButtonsCss = css`
    :host {
        display: block;
    }

    .buttons-container {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }

    .btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
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

    .btn .icon {
        width: 1.8rem;
        height: 1.8rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        .btn:hover .icon {
            transform: scale(1.1);
        }
    }

    .btn:active,
    .btn.pressing {
        transform: scale(0.95);
    }

    @media (max-width: 640px) {
        .buttons-container {
            gap: 0.5rem;
        }

        .btn {
            width: 3rem;
            height: 3rem;
        }

        .btn .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;