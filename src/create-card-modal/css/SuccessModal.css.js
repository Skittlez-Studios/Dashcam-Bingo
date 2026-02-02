import { css } from 'lit';

export const SuccessModalCss = css`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --foreground: #f1f5f9;
        --success: #10b981;
        --warning: #f59e0b;
        --border: rgba(71, 85, 105, 0.5);
        --radius: 0.75rem;
    }

    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(4px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: fadeIn 0.2s ease;
        overflow: hidden;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border-radius: var(--radius);
        max-width: 500px;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
        position: relative;
        box-sizing: border-box;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .modal-header {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid var(--border);
        position: relative;
    }

    .success-icon {
        width: 64px;
        height: 64px;
        color: var(--success);
        animation: scaleIn 0.5s ease;
    }

    @keyframes scaleIn {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.75rem;
        color: var(--foreground);
        font-weight: 700;
        text-align: center;
    }

    .close-btn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: var(--foreground);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.375rem;
        line-height: 1;
        padding: 0;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover {
            background: var(--muted);
        }
    }

    .modal-body {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
    }

    .success-text {
        margin: 0;
        color: var(--foreground);
        text-align: center;
        font-size: 1rem;
        line-height: 1.6;
    }

    .code-display {
        background: var(--background);
        border: 2px solid var(--success);
        border-radius: 0.5rem;
        padding: 1.5rem 2rem;
        width: 100%;
        box-sizing: border-box;
    }

    .code {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--success);
        letter-spacing: 0.25rem;
        font-family: 'Courier New', monospace;
        display: block;
        text-align: center;
    }

    .btn-copy {
        background: var(--success);
        color: white;
        border: none;
        padding: 0.875rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: inherit;
        transition: all 0.2s;
        width: 100%;
        justify-content: center;
    }

    .btn-copy .icon {
        width: 20px;
        height: 20px;
    }

    .btn-copy.copied {
        background: var(--success);
        opacity: 0.9;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-copy:hover {
            background: #059669;
        }
    }

    .info-box {
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        width: 100%;
        box-sizing: border-box;
    }

    .info-icon {
        width: 24px;
        height: 24px;
        color: #3b82f6;
        flex-shrink: 0;
    }

    .info-box > div > strong {
        display: block;
        color: var(--foreground);
        margin-bottom: 0.25rem;
        font-size: 0.9375rem;
    }

    .info-box p {
        margin: 0;
        color: var(--foreground);
        opacity: 0.9;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .info-box p strong {
        display: inline;
        white-space: nowrap;
    }

    .warning-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(4px);
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        border-radius: var(--radius);
        animation: fadeIn 0.2s ease;
    }

    .warning-box {
        background: var(--card);
        border: 2px solid var(--warning);
        border-radius: 0.5rem;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
    }

    .warning-icon {
        width: 48px;
        height: 48px;
        color: var(--warning);
    }

    .warning-box h3 {
        margin: 0;
        color: var(--warning);
        font-size: 1.5rem;
        font-weight: 700;
    }

    .warning-box p {
        margin: 0;
        color: var(--foreground);
        text-align: center;
        line-height: 1.6;
    }

    .warning-subtext {
        font-weight: 600;
        color: var(--warning);
    }

    .warning-buttons {
        display: flex;
        gap: 0.75rem;
        width: 100%;
        margin-top: 0.5rem;
    }

    .btn-warning-cancel,
    .btn-warning-confirm {
        flex: 1;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        border: none;
        font-family: inherit;
    }

    .btn-warning-cancel {
        background: var(--muted);
        color: var(--foreground);
    }

    .btn-warning-confirm {
        background: var(--warning);
        color: white;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-warning-cancel:hover {
            opacity: 0.8;
        }

        .btn-warning-confirm:hover {
            background: #d97706;
        }
    }

    @media (max-width: 640px) {
        .modal-backdrop {
            padding: 0.5rem;
        }

        .modal-header {
            padding: 1.5rem 1rem;
        }

        .modal-header h2 {
            font-size: 1.5rem;
        }

        .success-icon {
            width: 48px;
            height: 48px;
        }

        .modal-body {
            padding: 1.5rem 1rem;
        }

        .code {
            font-size: 2rem;
            letter-spacing: 0.15rem;
        }

        .warning-box {
            padding: 1.25rem;
        }

        .warning-icon {
            width: 40px;
            height: 40px;
        }

        .warning-box h3 {
            font-size: 1.25rem;
        }

        .warning-buttons {
            flex-direction: column-reverse;
        }
    }
`;