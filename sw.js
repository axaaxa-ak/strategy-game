const CACHE_NAME = '2.7'; // バージョンを v3 に上げる

const STATIC_ASSETS = [
  './',
  './index.html',
  './sw.js',
  './MapChart_Map.svg' // 大文字小文字・パスが100%合っているか要確認
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] キャッシュ開始');
      return cache.addAll(STATIC_ASSETS);
    }).catch((err) => console.error('[SW] キャッシュ失敗。パスを確認してください:', err))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // 1. HTML(ページ遷移)のみオンライン優先
  if (e.request.mode === 'navigate' || url.pathname.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // 2. SVGや画像、その他アセットは「何が何でもキャッシュ優先」
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // キャッシュがあれば絶対それを返す
      }
      return fetch(e.request).then((networkResponse) => {
        // キャッシュになかった場合は取得してキャッシュに追加
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
