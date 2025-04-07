self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('contador-do-amor').then(function(cache) {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './IMG-20241118-WA0004.jpg',  
          './IMG-20241118-WA0004.jpg',
          './service-worker.js'
          // Adicione outros arquivos que deseja que sejam armazenados em cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  