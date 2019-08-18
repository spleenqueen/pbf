var cacheName = 'pbf-cache';
var filesToCache = [
    '/pbf',
    '/pbf/index.html',
    '/pbf/ciders.html',
    '/pbf/images/icons/icons.svg',
    '/pbf/css/bootstrap.min.css',
    '/pbf/css/custom.css',
    '/pbf/js/bootstrap.bundle.min.js',
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
