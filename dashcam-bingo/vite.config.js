import { defineConfig } from 'vite';

export default defineConfig({
    base: '/dashcam-bingo/',
    server: {
        host: true,
        allowedHosts: [
            'unlibelously-untaintable-dilan.ngrok-free.dev'
        ]
    }
});