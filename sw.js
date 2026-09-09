// バージョン名を変更（書き換えたらここを v2, v3 と変えると確実に再キャッシュされる）
const CACHE_NAME = 'game-static-v1';

// 【重要】ゲームで使う画像をすべてここに正確なパスで書き並べる
const STATIC_ASSETS = [
  './',
  './index.html',
  './sw.js',
  './MapChart_Map.svg',
];

// インストール時にリストのファイルを全件一括キャッシュ
self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] 全アセットの一括キャッシュを開始します');
      // addAllは1つでもパス間違い（404エラー等）があると全体が失敗するため厳密に動作する
      return cache.addAll(STATIC_ASSETS);
    }).then(() => {
      console.log('[SW] キャッシュ完了！オフライン準備が整いました');
    }).catch((err) => {
      console.error('[SW] キャッシュに失敗しました。パスが間違っている可能性があります:', err);
    })
  );
});

// 有効化処理
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ネットワーク優先ではなく「キャッシュ完全優先」で返却
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // オフラインでもキャッシュから即座に返す
      }
      // キャッシュにない場合のみネットワークを見に行く
      return fetch(e.request);
    })
  );
});
