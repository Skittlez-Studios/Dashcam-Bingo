class SoundManager {
    constructor() {
        this.sounds = {};
        this.enabled = this.loadEnabledState();
        this.volume = 0.7;

        // Laad sounds
        this.loadSounds();
    }

    loadEnabledState() {
        const saved = localStorage.getItem('soundEnabled');
        return saved === null ? true : saved === 'true';
    }

    saveEnabledState() {
        localStorage.setItem('soundEnabled', this.enabled.toString());
    }

    loadSounds() {
        // Laad je eigen audio bestanden met .wav extensie
        this.loadAudioFile('click', '/sounds/click.wav');
        this.loadAudioFile('tick', '/sounds/tick.wav');
        this.loadAudioFile('win', '/sounds/win.wav');
    }

    loadAudioFile(name, url) {
        const audio = new Audio(url);
        audio.volume = this.volume;
        audio.preload = 'auto';

        this.sounds[name] = () => {
            if (!this.enabled) return;

            // Clone audio zodat je hem snel achter elkaar kunt afspelen
            const sound = audio.cloneNode();
            sound.volume = this.volume;
            sound.play().catch(e => console.log('Audio play failed:', e));
        };
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        this.saveEnabledState();

        // Dispatch event zodat de knop kan updaten
        window.dispatchEvent(new CustomEvent('sound-toggled', {
            detail: { enabled: this.enabled }
        }));

        return this.enabled;
    }

    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }

    isEnabled() {
        return this.enabled;
    }
}

// Singleton instance
export const soundManager = new SoundManager();