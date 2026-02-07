import { Network } from '@capacitor/network';

class OfflineDetector {
    constructor() {
        this.isOnline = true;
        this.init();
    }

    async init() {
        // Check initiële status
        const status = await Network.getStatus();
        this.isOnline = status.connected;
        console.log('Initial network status:', status);

        // Luister naar network changes
        Network.addListener('networkStatusChange', (status) => {
            console.log('Network status changed:', status);
            this.isOnline = status.connected;
            this.notifyListeners();
        });
    }

    async check() {
        const status = await Network.getStatus();
        return status.connected;
    }

    notifyListeners() {
        window.dispatchEvent(new CustomEvent('connection-change', {
            detail: { isOnline: this.isOnline }
        }));
    }
}

export const offlineDetector = new OfflineDetector();