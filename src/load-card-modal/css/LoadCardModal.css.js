import { css } from 'lit';

export const LoadCardModalCss = css`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --foreground: #f1f5f9;
        --primary: #3b82f6;
        --border: rgba(71, 85, 105, 0.5);
        --error: #ef4444;
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
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border-radius: var(--radius);
        max-width: 450px;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
        position: relative;
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

    .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(4px);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: var(--radius);
    }

    .loading-overlay p {
        color: var(--foreground);
        font-size: 1.125rem;
        font-weight: 600;
        margin: 0;
    }

    .spinner {
        width: 48px;
        height: 48px;
        border: 4px solid var(--muted);
        border-top-color: var(--primary);
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .modal-header {
        padding: 1.5rem;
        border-bottom: 1px solid var(--border);
        position: relative;
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: var(--foreground);
        font-weight: 700;
        padding-right: 2rem;
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
        .close-btn:hover:not(:disabled) {
            background: var(--muted);
        }
    }

    .close-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .modal-body {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .instructions {
        margin: 0;
        color: var(--foreground);
        font-size: 1rem;
        line-height: 1.5;
        text-align: center;
    }

    .code-input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .code-input {
        width: 100%;
        padding: 1rem;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 0.5rem;
        text-align: center;
        background: var(--background);
        border: 2px solid var(--border);
        border-radius: 0.5rem;
        color: var(--foreground);
        font-family: 'Courier New', monospace;
        box-sizing: border-box;
        transition: border-color 0.2s;
    }

    .code-input:focus {
        outline: none;
        border-color: var(--primary);
    }

    .code-input.error {
        border-color: var(--error);
    }

    .code-input:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .code-input::placeholder {
        color: var(--muted);
        opacity: 0.5;
    }

    .error-message {
        color: var(--error);
        font-size: 0.875rem;
        font-weight: 500;
        text-align: center;
    }

    .info-box {
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        padding: 1rem;
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .info-icon {
        width: 24px;
        height: 24px;
        color: var(--primary);
        flex-shrink: 0;
    }

    .info-box p {
        margin: 0;
        color: var(--foreground);
        opacity: 0.9;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .modal-footer {
        padding: 1.5rem;
        border-top: 1px solid var(--border);
        display: flex;
        gap: 0.75rem;
    }

    .btn-cancel,
    .btn-load {
        flex: 1;
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        border: none;
        font-family: inherit;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .btn-cancel {
        background: var(--muted);
        color: var(--foreground);
    }

    .btn-load {
        background: var(--primary);
        color: white;
    }

    .btn-load:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover:not(:disabled) {
            opacity: 0.8;
        }

        .btn-load:hover:not(:disabled) {
            background: #2563eb;
        }
    }

    .btn-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
    }

    @media (max-width: 640px) {
        .modal-backdrop {
            padding: 0.5rem;
        }

        .modal-header {
            padding: 1.25rem 1rem;
        }

        .modal-header h2 {
            font-size: 1.25rem;
        }

        .modal-body {
            padding: 1.25rem 1rem;
        }

        .code-input {
            font-size: 1.75rem;
            letter-spacing: 0.35rem;
        }

        .modal-footer {
            padding: 1.25rem 1rem;
            flex-direction: column-reverse;
        }
    }
`;