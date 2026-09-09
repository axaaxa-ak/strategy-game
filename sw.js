const CACHE_NAME = 'game-assets-v1';

// 必須の最低限ファイル（起動に必要なもの）
const INITIAL_FILES = [
  './',
  './index.html'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(INITIAL_FILES))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// 通信（fetch）を横取りして、成功した画像を動的にキャッシュへ保存する
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // キャッシュがあればそれを返す
      }
      return fetch(e.request).then((networkResponse) => {
        // 取得に成功したらキャッシュに保存しながら返す
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});
