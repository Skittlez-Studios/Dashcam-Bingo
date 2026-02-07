import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    base: '/',
    server: {
        host: true
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['icons/icon-192.png', 'icons/round-512-icon.png'],
            manifest: {
                name: 'Dashcam Bingo',
                short_name: 'Bingo',
                start_url: '.',
                display: 'standalone',
                background_color: '#ffffff',
                theme_color: '#3498db',
                icons: [
                    {
                        src: 'icons/icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/round-512-icon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    }
                ]
            },
            workbox: {
                runtimeCaching: [
                    {
                        urlPattern: /.*\.(js|css|png|svg|webmanifest)/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'static-resources'
                        }
                    }
                ]
            }
        })
    ]
});