var cacheName = 'pbf-cache';
var filesToCache = [
    '/pbf',
    '/pbf/index.html',
    '/pbf/ciders.html',
    '/pbf/css/bootstrap.min.css',
    '/pbf/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
