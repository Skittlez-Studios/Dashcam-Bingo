import './app.js';
import { registerSW } from 'virtual:pwa-register';
import { ScreenOrientation } from '@capacitor/screen-orientation';

registerSW({
    immediate: true
});

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
});

async function lockOrientationOnMobile() {
    const isPhone = Math.min(screen.width, screen.height) < 768;

    if (!isPhone) return;

    try {
        await ScreenOrientation.lock({ orientation: 'portrait' });
    } catch (error) {
        showLandscapeWarning();
    }
}

function showLandscapeWarning() {
    const isPhone = Math.min(screen.width, screen.height) < 768;
    if (!isPhone) return;

    if (document.getElementById('landscape-warning')) return;

    const warning = document.createElement('div');
    warning.id = 'landscape-warning';
    warning.innerHTML = `
        <div style="font-size: 4rem; margin-bottom: 1rem;">📱</div>
        <h2 style="margin: 0 0 0.5rem 0; color: #f1f5f9; font-family: system-ui, -apple-system, sans-serif;">Draai je telefoon</h2>
        <p style="margin: 0; color: #94a3b8; font-family: system-ui, -apple-system, sans-serif;">Deze app werkt het beste in portrait modus</p>
    `;

    Object.assign(warning.style, {
        display: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(15, 23, 42)',
        zIndex: '9999',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '2rem'
    });

    document.body.appendChild(warning);

    function checkOrientation() {
        const isLandscape = window.innerHeight < window.innerWidth;
        const isPhoneNow = Math.min(screen.width, screen.height) < 768;
        warning.style.display = (isLandscape && isPhoneNow) ? 'flex' : 'none';
    }

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    checkOrientation();
}

lockOrientationOnMobile();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(lockOrientationOnMobile, 500);
    });
} else {
    setTimeout(lockOrientationOnMobile, 500);
}

window.addEventListener('load', () => {
    setTimeout(lockOrientationOnMobile, 1000);
});

document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        lockOrientationOnMobile();
    }
});