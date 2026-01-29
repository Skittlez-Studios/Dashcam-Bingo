import { defineConfig } from 'vite';

export default defineConfig({
    base: '/Dashcam-bingo/',
    server: {
        host: true,
        allowedHosts: [
            'unlibelously-untaintable-dilan.ngrok-free.dev'
        ]
    }
});