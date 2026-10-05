const CACHE_NAME = 'v2.777777'; // v5に更新

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

  // ★最優先ルール：URLに「MapChart_Map.svg」が含まれているなら、リクエストモードに関係なく即座にキャッシュを返す
  if (url.pathname.includes('MapChart_Map.svg')) {
    e.respondWith(
      caches.match('./MapChart_Map.svg').then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        // 万が一相対パスで見つからなければクエリ無視で全体検索
        return caches.match(e.request, { ignoreSearch: true });
      }).then((response) => {
        if (response) return response;
        // それでも無ければネットワークへ
        return fetch(e.request);
      })
    );
    return;
  }

  // HTML（トップページ遷移）のみオンライン優先
  if (e.request.mode === 'navigate' && url.pathname.endsWith('index.html')) {
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

  // その他すべての静的ファイル
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
