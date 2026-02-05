class HapticManager {
    constructor() {
        this.enabled = true;
    }

    vibrate(duration) {
        if (this.enabled && navigator.vibrate) {
            navigator.vibrate(duration);
        }
    }

    pattern(pattern) {
        if (this.enabled && navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    toggle() {
        this.enabled = !this.enabled;
    }
}

export const hapticManager = new HapticManager();