// TouchEffects.css.js - nieuw bestand
import { css } from "lit";

export const TouchEffectsMixin = css`
    .touch-interactive {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        touch-action: manipulation;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (hover: hover) and (pointer: fine) {
        .touch-interactive:hover:not(:disabled) {
            opacity: 0.8;
            transform: translateY(-2px);
        }
    }

    .touch-interactive.pressing:not(:disabled) {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;