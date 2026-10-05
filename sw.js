const CACHE_NAME = '2.7076'; // バージョンを v4 に更新

const STATIC_ASSETS = [
  './',
  './index.html',
  './sw.js',
  './MapChart_Map.svg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] 全アセットの一括キャッシュを開始します');
      return cache.addAll(STATIC_ASSETS);
    }).catch((err) => console.error('[SW] キャッシュ失敗:', err))
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
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }

  // 2. SVGや画像、その他アセットはキャッシュ優先
  e.respondWith(
    // ★ ignoreSearch: true を指定して ?v=xxxx などのクエリパラメータを無視して検索させる
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // クエリ無視でキャッシュが見つかればそれを返す
      }
      return fetch(e.request).then((networkResponse) => {
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
