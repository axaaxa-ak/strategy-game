const CACHE_NAME = 'v7'; // v7に更新

const STATIC_ASSETS = [
  './',
  './index.html',
  './sw.js',
  './MapChart_Map.svg'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] 個別キャッシュ処理を開始します');
      for (const asset of STATIC_ASSETS) {
        try {
          // 普通の cache.add(asset) だと iOS WebKit が SVG 等で拒絶する場合があるため、
          // fetch で生データを取得し、Response を再構築してキャッシュに叩き込む
          const response = await fetch(asset, { cache: 'no-cache' });
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          
          // レスポンスのクローンを作成して保存
          await cache.put(asset, response.clone());
          console.log(`[SW] キャッシュ成功: ${asset}`);
        } catch (err) {
          console.error(`[SW] ★キャッシュ失敗: ${asset}`, err);
        }
      }
    })
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

  // 1. URLに「MapChart_Map.svg」が含まれていれば、クエリ(?v=...)等に関わらず絶対キャッシュから返す
  if (url.pathname.includes('MapChart_Map.svg')) {
    e.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cached = await cache.match('./MapChart_Map.svg');
        if (cached) return cached;
        
        // パスそのもので見つからなければクエリ無視で検索
        const cachedIgnoreSearch = await cache.match(e.request, { ignoreSearch: true });
        if (cachedIgnoreSearch) return cachedIgnoreSearch;

        // それでも無ければネットワークへ
        return fetch(e.request);
      })
    );
    return;
  }

  // 2. HTML(トップページ遷移)のみオンライン優先
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

  // 3. その他すべての静的ファイルはキャッシュ優先
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
