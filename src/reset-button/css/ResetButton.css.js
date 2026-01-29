import { css } from 'lit';

export const ResetButtonCss = css`
  :host {
    --muted: #334155;
    --foreground: #f1f5f9;
    --border: rgba(71, 85, 105, 0.5);
    --radius: 0.75rem;
  }

  .reset-btn {
    all: unset;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--muted);
    border: 2px solid var(--border);
    border-radius: var(--radius);
    color: var(--foreground);
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
  }

  .reset-btn:hover {
    background: #475569;
    border-color: #64748b;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }

  .reset-btn:active {
    transform: scale(0.98);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.5s ease;
  }

  .reset-btn:hover .icon {
    transform: rotate(-180deg);
  }
`;