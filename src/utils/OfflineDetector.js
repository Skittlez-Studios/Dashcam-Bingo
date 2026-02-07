class OfflineDetector {
    constructor() {
        this.isOnline = navigator.onLine;

        window.addEventListener('online', () => {
            this.isOnline = true;
            this.notifyListeners();
        });

        window.addEventListener('offline', () => {
            this.isOnline = false;
            this.notifyListeners();
        });
    }

    check() {
        return navigator.onLine;
    }

    notifyListeners() {
        window.dispatchEvent(new CustomEvent('connection-change', {
            detail: { isOnline: this.isOnline }
        }));
    }
}

export const offlineDetector = new OfflineDetector();