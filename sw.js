// Service Worker - Boulangerie Prestige
const CACHE_NAME = 'boulangerie-prestige-v4';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// Installation : mise en cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

// Activation : nettoyage anciens caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch : cache-first (fonctionne offline)
self.addEventListener('fetch', (event) => {
    // Ne pas cacher les requêtes Google Sheets
    if (event.request.url.includes('script.google.com') ||
        event.request.url.includes('docs.google.com')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchResponse => {
                // Cacher les nouvelles ressources
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            });
        }).catch(() => {
            // Fallback offline
            return caches.match('./index.html');
        })
    );
});