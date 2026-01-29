const CACHE = 'dashcam-bingo-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/src/main.js',
    '/src/app.js',
    '/manifest.webmanifest'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});
