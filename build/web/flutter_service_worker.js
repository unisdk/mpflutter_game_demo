'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1df6016b6d947fcd7f45216f938ce075",
"version.json": "4d69008c4faf689c312fd6dbbdb1543e",
"index.html": "4280381ecf7c8717ec38b1f0e57bdce5",
"/": "4280381ecf7c8717ec38b1f0e57bdce5",
"main.dart.js": "c5e8bdad7e724c874c477994e3fbffe6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b6a5a92410f48ef1a0ba79243a7be42d",
"assets/AssetManifest.json": "4c44620e29e30dfea4d6d183c53eba42",
"assets/NOTICES": "8aa87825f93c20342bb8009070b7543b",
"assets/FontManifest.json": "6ace55d6bc23f1a949e1edc1e9c77fe8",
"assets/AssetManifest.bin.json": "834dd13e3fe80121f7a5a8e31b21b070",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/simple.frag": "0c2299d2b35041e8ce02cbf2404d1a27",
"assets/AssetManifest.bin": "acbd577dd10238e99f1f0a7d48842f71",
"assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/fonts/NotoSansSC-Regular.ttf": "0a35002af18c39740c08a97188247175",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/images/ic_home_back.png": "3103d20a3bbe24820704d4ffd174232b",
"assets/assets/images/ic_arrow_right.png": "150792aa8b2c41e3a406ac27c8b4f300",
"assets/assets/images/ic_home_scan.png": "3ed78afea86ca42004592340ea996c45",
"assets/assets/images/ic_unselect.png": "9967501ec491aea0d11534b1753a3943",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/ic_home_more.png": "5f7012eb363b0cd3a035c57855c40390",
"assets/assets/images/ic_room_exit.png": "58b7005c0df17bfc51fbf7630552a108",
"assets/assets/images/ic_keyboard_delete.png": "36ccf190562544da0fb81467896298a0",
"assets/assets/images/ic_home_teaching.png": "2157851b67615341f932042a970f425a",
"assets/assets/images/ic_home_history.png": "955cd40a82edbdd998347e1e99b85f7c",
"assets/assets/images/ic_room_single.png": "24d370b29da16c0fb2f964afad3d9bb1",
"assets/assets/images/ic_room_rank.png": "6ee514f96e49b23fa59c6db83845d25c",
"assets/assets/images/bg_home_create_room.png": "69b81a849428bcc03755c149cf49dc9b",
"assets/assets/images/ic_dialog_close.png": "5340d7575a4aec06898bb5f34a6b561c",
"assets/assets/images/ic_room_score.png": "93de355049b0ab15ceee69d48e5736fc",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/ic_home_create.png": "96bff621ec974a615c3073ef5bfd026b",
"assets/assets/images/ic_leaf.png": "f4ab16ac1576643597ab392c639a490f",
"assets/assets/images/bg_room_score_finish.png": "0933977c06cfe7e104381364c3d1cf4d",
"assets/assets/images/ic_room_tea.png": "3667d93af5b684d95f06455d05e66d14",
"assets/assets/images/ic_leaf_answer.png": "a2d0a662b2503449978037dabdd0e455",
"assets/assets/images/ic_home_service.png": "14478f7e3881d74f03017e61f04fd564",
"assets/assets/images/ic_default_head.png": "98ebec57dd23c2307bb73201a19c499d",
"assets/assets/images/ic_wechat_logo.png": "1f02f24f8960009835f2ca1adcc06aed",
"assets/assets/images/bg_home_top.png": "b07063b2082519ca3c023d3db91e06c0",
"assets/assets/images/bg_home_info.png": "7d222ab3524530768ffad629930ca0ad",
"assets/assets/images/ic_room_setting.png": "aa25928b74197aa5aa9eabbb731749a0",
"assets/assets/images/ic_back.png": "b9518cb3cf3cbe7a90f9c7db0e05ea0f",
"assets/assets/images/share.png": "44d1d6abb29a64828210bd7f34cb4713",
"assets/assets/images/ic_user_edit.png": "df98f0c514237cf2990e223ae3fd32ce",
"assets/assets/images/bg_leaf_role.png": "15689126c287c5719e2bb0ec013c378b",
"assets/assets/images/ic_room_multiple.png": "88d711454d63159366a4e4d13b4a1f47",
"assets/assets/images/ic_empty_flow.png": "f4d7a42ccea1298b5ceb2711ac862e07",
"assets/assets/images/bg_appbar.png": "b43361adc36f7025fc1ac9c28c0c44a3",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/ic_selected.png": "4b78217e874ee7d1c407af7445453e48",
"assets/assets/images/bg_home_room.png": "78e6536cd9ee8eb15de4f4368ad4652c",
"assets/assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
