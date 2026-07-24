self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('wisetools-v1').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './calculateur.html',
        './convertisseur.html',
        './salaire.html',
        './facture.html',
        './cv.html',
        './legal.html'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
