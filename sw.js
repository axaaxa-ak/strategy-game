const CACHE_NAME = 'v333333';

// スコープの絶対ベースURLを取得（例: https://axaaxa-ak.github.io/strategy-game/）
const BASE_URL = self.registration.scope;

const ASSETS_TO_CACHE = [
  new URL('./', BASE_URL).href,
  new URL('./index.html', BASE_URL).href,
  new URL('./sw.js', BASE_URL).href,
  new URL('./MapChart_Map.svg', BASE_URL).href
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[SW] 絶対URLによる確実な一括キャッシュを開始します');
      for (const url of ASSETS_TO_CACHE) {
        try {
          const response = await fetch(url, { cache: 'no-cache' });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          await cache.put(url, response.clone());
          console.log(`[SW] キャッシュ成功: ${url}`);
        } catch (err) {
          console.error(`[SW] キャッシュ失敗: ${url}`, err);
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

  // 1. 地図SVGへのリクエスト（クエリやリクエストモードを問わずすべてキャッチ）
  if (url.pathname.includes('MapChart_Map.svg')) {
    e.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        // 保存済みのキャッシュ一覧から MapChart_Map.svg を探す
        const requests = await cache.keys();
        const svgRequest = requests.find(r => r.url.includes('MapChart_Map.svg'));
        
        if (svgRequest) {
          const cachedResponse = await cache.match(svgRequest);
          if (cachedResponse) return cachedResponse;
        }

        // 万が一見つからなければ通常検索
        const fallback = await cache.match(e.request, { ignoreSearch: true });
        if (fallback) return fallback;

        return fetch(e.request);
      })
    );
    return;
  }

  // 2. HTML（トップページ）はオンライン時ネットワーク優先
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

  // 3. その他すべてはキャッシュ優先
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
