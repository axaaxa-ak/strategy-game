const CACHE_NAME = 'game-cache-v1';
// オフラインで使いたいファイルを一覧で指定
const FILES_TO_CACHE = [
  './',
  './index.html'
];

// インストール時にファイルを端末に保存
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

// オフライン時は保存したキャッシュから読み込む
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
