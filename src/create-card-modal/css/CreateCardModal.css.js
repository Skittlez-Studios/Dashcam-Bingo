import { css } from 'lit';

export const CreateCardModalCss = css`
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
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: fadeIn 0.2s ease;
        overflow: hidden;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .error-popup {
        position: fixed;
        top: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--error);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        animation: slideDown 0.3s ease;
        max-width: 90vw;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    .error-icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
    }

    .error-popup strong {
        display: block;
        font-weight: 700;
        margin-bottom: 0.25rem;
    }

    .error-popup p {
        margin: 0;
        font-size: 0.875rem;
        opacity: 0.9;
    }

    .modal {
        background: var(--card);
        border-radius: var(--radius);
        max-width: 650px;
        width: 100%;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        border: 1px solid var(--border);
        animation: slideUp 0.3s ease;
        overflow: hidden;
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
        padding: 1.5rem;
        border-bottom: 1px solid var(--border);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
        box-sizing: border-box;
    }

    .modal-header h2 {
        margin: 0;
        font-size: 1.5rem;
        color: var(--foreground);
        font-weight: 700;
    }

    .close-btn {
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
        padding: 1.5rem;
        overflow-y: auto;
        overflow-x: hidden;
        flex: 1;
        box-sizing: border-box;
    }

    .tiles-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        box-sizing: border-box;
    }

    .tile-item {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        border-bottom: 1px solid var(--border);
        padding-bottom: 1.25rem;
        box-sizing: border-box;
    }

    .tile-item:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    .tile-item.disabled {
        opacity: 0.7;
    }

    .tile-number-badge {
        background: var(--primary);
        color: white;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 0.875rem;
        flex-shrink: 0;
        margin-top: 0.25rem;
    }

    .tile-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        min-width: 0;
    }

    .tile-title-row {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
    }

    .input-wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.375rem;
        min-width: 0;
    }

    .title-input {
        width: 100%;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 0.375rem;
        padding: 0.625rem 0.875rem;
        font-family: inherit;
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--foreground);
        transition: border-color 0.2s;
        box-sizing: border-box;
    }

    .title-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .title-input.input-error,
    .description-input.textarea-error {
        border-color: var(--error);
    }

    .title-input.input-error:focus,
    .description-input.textarea-error:focus {
        border-color: var(--error);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
    }

    .title-input:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .error-message {
        color: var(--error);
        font-size: 0.75rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        word-break: break-word;
    }

    .free-badge {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--primary);
        white-space: nowrap;
        flex-shrink: 0;
    }

    .description-row {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        margin-left: 1rem;
    }

    .connector-line {
        width: 20px;
        height: 100%;
        position: relative;
        flex-shrink: 0;
    }

    .connector-line::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 2px;
        height: 12px;
        background: var(--primary);
        opacity: 0.5;
    }

    .connector-line::after {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        width: 20px;
        height: 2px;
        background: var(--primary);
        opacity: 0.5;
    }

    .description-input {
        width: 100%;
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 0.375rem;
        padding: 0.625rem 0.875rem;
        font-family: inherit;
        font-size: 0.875rem;
        color: var(--foreground);
        transition: border-color 0.2s;
        resize: vertical;
        min-height: 60px;
        box-sizing: border-box;
    }

    .description-input:focus {
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .description-input:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal-footer {
        padding: 1.5rem;
        border-top: 1px solid var(--border);
        display: flex;
        justify-content: flex-end;
        gap: 0.75rem;
        flex-shrink: 0;
        box-sizing: border-box;
    }

    .btn-cancel,
    .btn-create {
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        font-size: 0.875rem;
        cursor: pointer;
        border: none;
        font-family: inherit;
    }

    .btn-cancel {
        background: var(--muted);
        color: var(--foreground);
    }

    .btn-create {
        background: var(--primary);
        color: white;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover {
            background: var(--muted);
            opacity: 0.8;
        }

        .btn-create:hover {
            background: #2563eb;
        }
    }

    @media (max-width: 640px) {
        .modal-backdrop {
            padding: 0.5rem;
        }

        .error-popup {
            top: 0.75rem;
            padding: 0.75rem 1rem;
            font-size: 0.875rem;
            max-width: calc(100vw - 2rem);
        }

        .error-icon {
            width: 20px;
            height: 20px;
        }

        .error-popup strong {
            font-size: 0.875rem;
        }

        .error-popup p {
            font-size: 0.8125rem;
        }

        .modal {
            max-height: 85vh;
            max-width: 90%;
        }

        .modal-header {
            padding: 1rem;
        }

        .modal-header h2 {
            font-size: 1.125rem;
        }

        .modal-body {
            padding: 1rem;
        }

        .tiles-list {
            gap: 0.875rem;
        }

        .tile-item {
            padding-bottom: 0.875rem;
            gap: 0.75rem;
        }

        .tile-number-badge {
            width: 28px;
            height: 28px;
            font-size: 0.75rem;
        }

        .tile-title-row {
            gap: 0.5rem;
        }

        .title-input {
            font-size: 0.875rem;
            padding: 0.5rem 0.75rem;
        }

        .description-row {
            margin-left: 0.5rem;
            gap: 0.5rem;
        }

        .connector-line {
            width: 16px;
        }

        .connector-line::after {
            width: 16px;
        }

        .description-input {
            font-size: 0.8125rem;
            padding: 0.5rem 0.75rem;
            min-height: 50px;
        }

        .error-message {
            font-size: 0.6875rem;
        }

        .free-badge {
            font-size: 0.75rem;
        }

        .modal-footer {
            padding: 1rem;
            flex-direction: column-reverse;
            gap: 0.5rem;
        }

        .btn-cancel,
        .btn-create {
            width: 100%;
            padding: 0.625rem 1rem;
            font-size: 0.8125rem;
        }
    }

    @media (max-width: 400px) {
        .modal-backdrop {
            padding: 0.25rem;
        }

        .error-popup {
            top: 0.5rem;
            padding: 0.625rem 0.875rem;
        }

        .modal-header h2 {
            font-size: 1rem;
        }

        .tile-number-badge {
            width: 24px;
            height: 24px;
            font-size: 0.6875rem;
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

    .btn-spinner {
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        display: inline-block;
        animation: spin 0.6s linear infinite;
        margin-right: 0.5rem;
    }

    .btn-create {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .free-tile-toggle-row {
        margin-bottom: 0.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--border);
    }

    .toggle-label {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        cursor: pointer;
        user-select: none;
    }

    .toggle-checkbox {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }

    .toggle-slider {
        position: relative;
        width: 44px;
        height: 24px;
        background: var(--muted);
        border-radius: 12px;
        transition: background 0.3s;
        flex-shrink: 0;
    }

    .toggle-slider::before {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        left: 3px;
        top: 3px;
        background: white;
        border-radius: 50%;
        transition: transform 0.3s;
    }

    .toggle-checkbox:checked + .toggle-slider {
        background: var(--primary);
    }

    .toggle-checkbox:checked + .toggle-slider::before {
        transform: translateX(20px);
    }

    .toggle-checkbox:disabled + .toggle-slider {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .toggle-text {
        font-size: 0.9375rem;
        font-weight: 600;
        color: var(--foreground);
    }

    .tile-item.disabled .tile-content {
        opacity: 0.5;
    }

    .tile-item.disabled .title-input,
    .tile-item.disabled .description-input {
        background: var(--muted);
        cursor: not-allowed;
    }
`;