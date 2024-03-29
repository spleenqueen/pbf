var cacheName = 'pbf-cache';
var filesToCache = [
    '/pbf',
    '/pbf/index.html',
    '/pbf/about.html',
    '/pbf/ciders.html',
    '/pbf/gin.html',
    '/pbf/keykeg.html',
    '/pbf/wine.html',
    '/pbf/worldbeers.html',
    '/pbf/images/icons/icons.svg',
    '/pbf/css/bootstrap.min.css',
    '/pbf/css/custom.css',
    '/pbf/js/jquery-3.3.1.slim.min.js',
    '/pbf/js/bootstrap.bundle.min.js',
    '/pbf/js/list.min.js',
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

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    // Return true if you want to remove this cache,
                    // but remember that caches are shared across
                    // the whole origin
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
