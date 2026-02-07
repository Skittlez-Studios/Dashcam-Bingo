class SoundManager {
    constructor() {
        this.enabled = this.loadEnabledState();
        this.volume = 0.7;

        this.audioContext = null;
        this.masterGain = null;
        this.buffers = {};
        this.htmlAudio = {};

        this.soundConfig = {
            click: ['/sounds/click.wav'],
            tick: ['/sounds/tick.wav'],
            win: ['/sounds/win.wav'],
            check: ['/sounds/check.mp3'],
            uncheck: ['/sounds/uncheck.mp3'],
            pling: ['/sounds/pling.wav']
        };

        this.unlockHandler = this.unlockOnFirstGesture.bind(this);
        window.addEventListener('pointerdown', this.unlockHandler, { once: true, passive: true });

        this.setupAudio();
    }

    loadEnabledState() {
        try {
            const saved = localStorage.getItem('soundEnabled');
            return saved === null ? true : saved === 'true';
        } catch {
            return true;
        }
    }

    saveEnabledState() {
        try {
            localStorage.setItem('soundEnabled', this.enabled.toString());
        } catch {}
    }

    setupAudio() {
        const Context = window.AudioContext || window.webkitAudioContext;
        if (!Context) {
            this.preloadHtmlAudio();
            return;
        }

        this.audioContext = new Context();
        this.masterGain = this.audioContext.createGain();
        this.masterGain.gain.value = this.volume;
        this.masterGain.connect(this.audioContext.destination);

        for (const name in this.soundConfig) {
            this.loadBuffer(name);
        }

        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                this.resumeAudioContext();
            }
        });
    }

    async unlockOnFirstGesture() {
        if (!this.audioContext) return;

        try {
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }

            const buffer = this.audioContext.createBuffer(1, 1, this.audioContext.sampleRate);
            const source = this.audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(this.audioContext.destination);
            source.start();
        } catch {}
    }

    async resumeAudioContext() {
        try {
            if (this.audioContext && this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
            }
        } catch {}
    }

    async loadBuffer(name) {
        const urls = this.soundConfig[name];

        for (const url of urls) {
            try {
                const response = await fetch(url);
                const data = await response.arrayBuffer();
                const buffer = await this.audioContext.decodeAudioData(data);
                this.buffers[name] = buffer;
                return;
            } catch {}
        }

        this.preloadHtmlAudioSingle(name);
    }

    preloadHtmlAudio() {
        for (const name in this.soundConfig) {
            this.preloadHtmlAudioSingle(name);
        }
    }

    preloadHtmlAudioSingle(name) {
        const url = this.soundConfig[name][0];
        const audio = new Audio(url);
        audio.preload = 'auto';
        audio.volume = this.volume;
        this.htmlAudio[name] = audio;
    }

    play(name) {
        if (!this.enabled) return;

        this.resumeAudioContext();

        if (this.buffers[name]) {
            this.playWebAudio(name);
            return;
        }

        if (this.htmlAudio[name]) {
            this.playHtmlAudio(name);
        }
    }

    playWebAudio(name) {
        try {
            const source = this.audioContext.createBufferSource();
            source.buffer = this.buffers[name];

            const gain = this.audioContext.createGain();
            gain.gain.value = this.volume;

            source.connect(gain);
            gain.connect(this.masterGain);
            source.start();
        } catch {}
    }

    playHtmlAudio(name) {
        try {
            const audio = this.htmlAudio[name].cloneNode(true);
            audio.volume = this.volume;
            audio.play().catch(() => {});
        } catch {}
    }

    toggle() {
        this.enabled = !this.enabled;
        this.saveEnabledState();

        window.dispatchEvent(new CustomEvent('sound-toggled', {
            detail: { enabled: this.enabled }
        }));

        return this.enabled;
    }

    setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        if (this.masterGain) {
            this.masterGain.gain.value = this.volume;
        }
    }

    isEnabled() {
        return this.enabled;
    }
}

export const soundManager = new SoundManager();
