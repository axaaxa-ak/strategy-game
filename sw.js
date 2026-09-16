// ★アプデ時はここを 'v2', 'v3' と更新する
const CACHE_NAME = 'v2';

const STATIC_ASSETS = [
  './',
  './index.html',
  './sw.js',
  './MapChart_Map.svg',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] 全アセットの一括キャッシュを開始します');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[SW] キャッシュ完了！');
    }).catch((err) => {
      console.error('[SW] キャッシュ失敗:', err);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] 古いキャッシュを破棄:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ★ここを変更：index.html だけはオンライン時に必ずサーバーから最新を取得する
self.addEventListener('fetch', (e) => {
  if (e.request.mode === 'navigate' || e.request.url.endsWith('index.html')) {
    e.respondWith(
      fetch(e.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
      }).catch(() => {
        // オフラインの時だけキャッシュから出す
        return caches.match(e.request);
      })
    );
    return;
  }

  // 画像などは今まで通りキャッシュ優先で爆速読み込み
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
