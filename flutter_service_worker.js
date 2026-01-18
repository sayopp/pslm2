'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1c5a7d6bdc60834815691d816d57cc24",
"assets/NOTICES": "2431a27d0791a2ae3214a79b2740e5c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a13a165541835bfd69a46210413d40a1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48ad08f37961c8f89136709b54f510ee",
"/": "48ad08f37961c8f89136709b54f510ee",
"main.dart.js": "fdca66cbeb78ef24ccf07a4d64a8475d",
"manifest.json": "4410acf11c1610343334b4771ae71a59",
"pslm/.git/COMMIT_EDITMSG": "166d77ac1b46a1ec38aa35ab7e628ab5",
"pslm/.git/config": "da216ccbc81e877ab6a369ac52178ad9",
"pslm/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"pslm/.git/FETCH_HEAD": "f1b1cf9b5e3f9a642f337e605fa801a2",
"pslm/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"pslm/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"pslm/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"pslm/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"pslm/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"pslm/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"pslm/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"pslm/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"pslm/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"pslm/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"pslm/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"pslm/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"pslm/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"pslm/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"pslm/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"pslm/.git/index": "80c8caa0b7de5d7c8f92b67cbb305e25",
"pslm/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"pslm/.git/logs/HEAD": "39174ec140b7fa9be5b10a19c289cf0e",
"pslm/.git/logs/refs/heads/gh-pages": "f5e7971c37ed9c3eb741e027d7641012",
"pslm/.git/logs/refs/heads/main": "9fb79f8927b94941e5aa15ae6f12b88f",
"pslm/.git/logs/refs/remotes/origin/gh-pages": "df07ce4096cee77c354f727e34cc5916",
"pslm/.git/logs/refs/remotes/origin/HEAD": "a341c26ce74a7023dee4b43696c205b3",
"pslm/.git/logs/refs/remotes/origin/main": "e737d00807e3e6fa537abf6656ae03f9",
"pslm/.git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
"pslm/.git/objects/09/05e0f9d7fc8c3580302c105f017cc2ef5f84d4": "3246b83f8b67b500471b5a24feff4ffb",
"pslm/.git/objects/0b/79668b6a0f38eed57de8eb279338519783eb5f": "8ebf7257a19468003cee0c10f2c8efbc",
"pslm/.git/objects/10/2c4e89b27688d49d25a477b06b4c59b66870c8": "36eea4de035b3947eaa378902cedfe2e",
"pslm/.git/objects/13/4717b92ac34e82ac489bff7234f0e2624d6b37": "ad1a6b42f46bd5e93ff48d9c39af9846",
"pslm/.git/objects/1a/18d931ca76dc5c8531b0719f561da5797621cf": "a5e513d6e5fa1e7d6be7d512d8bd72b1",
"pslm/.git/objects/1e/c709edce34418a0e83e09dc0025214e9800095": "abc26dbeb393519fddb37bbbb974e723",
"pslm/.git/objects/22/f7e0c668e30061ad523f9963ca1d1cf88e4dc5": "ef82ad6e904930ff0c67485d11dbbcb3",
"pslm/.git/objects/26/23974a6860be629006f41c76a31fcecf3250a4": "cd0e63f83cf26a786e19faa1196f0ead",
"pslm/.git/objects/29/5dee147c1c7ad7c4382ca000f984688061e66b": "b24f4a0e02723d513747a7baf508bc32",
"pslm/.git/objects/2d/fbcb8089b4ac70c97f4e92d47f5f5432dc3ce1": "bd0cf6d2f97b879925f11cb55651b5e6",
"pslm/.git/objects/34/eb076c7c2ec25e00a389b29436cddef808e789": "21f5d034517c687dc752cff15fc52e34",
"pslm/.git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
"pslm/.git/objects/3e/92239ae0541ec6b5b5b2c6c02d4c93909bb2d1": "4199f93a84e45db55a18cfa9c993ad29",
"pslm/.git/objects/3f/9896e7082beb964830e2c5c1d02fd7d47a39e9": "f8fd059b1c194f4d351e80387f825af2",
"pslm/.git/objects/45/f72b434fe21a0aa0d43503ea3114f4dc35cfda": "8c9f3e96a644e7c840d7c5cdaf79f48e",
"pslm/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"pslm/.git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
"pslm/.git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
"pslm/.git/objects/56/e3da778638bb464325da7c3b5415bc7593556d": "ed88f02e5ed6014c82510520b2899e37",
"pslm/.git/objects/57/6155f840d868d58b199f5c47c335be0764d20d": "23a3ffc6b2d35582bc529427797307d4",
"pslm/.git/objects/5e/deabf8e53a9053f5759ef09b69e3039261d95a": "f7830ed15a363bae4c70c0448df90d4c",
"pslm/.git/objects/67/1a90f665be3c5a24767d130044d96dc455824b": "c4c459954c12ecb0ed3f983bb33ad8e7",
"pslm/.git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
"pslm/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"pslm/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
"pslm/.git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
"pslm/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"pslm/.git/objects/72/31708b1552b39aeabf7a92c000ca785e4ee3ec": "f9d38c954478ce5e01b7bfaf2c766518",
"pslm/.git/objects/73/f61b4f5a3927417006f8bfb5718c862f093be9": "05a41968bb86df7a991a53d2ee7f8ac9",
"pslm/.git/objects/78/80bbbe12e7aced8cbfc838378c04405be9c0e1": "3a043d0fd8ec6dce140d8e9c8978e328",
"pslm/.git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
"pslm/.git/objects/7f/055f3a6ef6ddd01e17ba677e526dc49f78e93a": "0477c07c62213fe8cafde5b0bb3b58ac",
"pslm/.git/objects/82/af358ffc93ec126d7a3d13580d19f57d984cde": "769964f846362efb99d29fad16d392c6",
"pslm/.git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
"pslm/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"pslm/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"pslm/.git/objects/8d/b57b1ffdcbfd21871e50798fedb4a9d03036b9": "cb20e91fda83cabbc2c5a099e2ec30cb",
"pslm/.git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
"pslm/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"pslm/.git/objects/92/0ac350aaf2b26ec23759d617f79202952db3d2": "2a909bec10b171fbe24b72c701a4749c",
"pslm/.git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
"pslm/.git/objects/9c/ae55db3ac43a42a84f1fc031272e8d6d133f95": "e64c238b5bfc0a0dea9c8c0fdfb192ad",
"pslm/.git/objects/9e/58fe1922f04d3967625b166b0bb868ec727644": "526f3a9dbb9c8e2e81ad002096b8fd46",
"pslm/.git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
"pslm/.git/objects/ab/eb7fbbb4878530787710a673fdde41e00c6808": "968b775e54f5e8270be3f4bd879aa5bc",
"pslm/.git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
"pslm/.git/objects/b4/f1536183c8626d95a63534cbb2dbcbfaada39a": "a2b0de866b2f97c985655b03c791cbc4",
"pslm/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"pslm/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"pslm/.git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
"pslm/.git/objects/ba/af37f04dd7c562fee779d1214cf2bdff5183d2": "8534fe179033697dee25d2baafa53698",
"pslm/.git/objects/c8/20c5b1b34fef04c66a910b90e783fc021dc74c": "04327421931ea070248be2738e6a4111",
"pslm/.git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
"pslm/.git/objects/cd/706d66d903acddd6fb59dbd9bed74c90d9f72f": "9b6e20c08e686b2afbc0dd2677e6c59c",
"pslm/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"pslm/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"pslm/.git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
"pslm/.git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
"pslm/.git/objects/df/1e26386d06509c264dd3aaa9c2039d27f0b783": "2a9ba90bf8d57d6b55448f03cc53f8b8",
"pslm/.git/objects/df/259f1ad3d2a27b8cc8d147ee4311b8741fb9fe": "0d3a926602e5986f1ad5a8304f1698b4",
"pslm/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"pslm/.git/objects/e7/c73f0f4d6fca52b5000e25cb7d3c1b18fe55b9": "4d10d3302ee0b34d3cc2c41974ba88a7",
"pslm/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
"pslm/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"pslm/.git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
"pslm/.git/objects/f4/7389f613df02499cf5fc152a70812b167c352a": "88d0fabfdc71b09128d88b3c1048111b",
"pslm/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
"pslm/.git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
"pslm/.git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
"pslm/.git/refs/heads/gh-pages": "06eff0d0ea90f8f32cd0f82558188c34",
"pslm/.git/refs/heads/main": "dd0843e5422eac9d25958de065c969c7",
"pslm/.git/refs/remotes/origin/gh-pages": "06eff0d0ea90f8f32cd0f82558188c34",
"pslm/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"pslm/.git/refs/remotes/origin/main": "dd0843e5422eac9d25958de065c969c7",
"pslm/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"pslm/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"pslm/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"pslm/assets/fonts/MaterialIcons-Regular.otf": "1c5a7d6bdc60834815691d816d57cc24",
"pslm/assets/NOTICES": "2431a27d0791a2ae3214a79b2740e5c3",
"pslm/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"pslm/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"pslm/assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"pslm/canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"pslm/canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"pslm/canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"pslm/canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"pslm/canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"pslm/canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"pslm/canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"pslm/canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"pslm/canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"pslm/canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"pslm/canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"pslm/canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"pslm/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"pslm/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"pslm/flutter_bootstrap.js": "75ba43b03b30d1edfdc840c68c22ff56",
"pslm/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"pslm/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"pslm/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"pslm/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"pslm/index.html": "612006bfb4d5068609d0687d583dcdf6",
"pslm/main.dart.js": "6839c9b0dd3b7d884bfe35ae2f732f69",
"pslm/manifest.json": "4410acf11c1610343334b4771ae71a59",
"pslm/version.json": "b9d2bdb3eac65b50dc73ca04feae82ef",
"version.json": "b9d2bdb3eac65b50dc73ca04feae82ef"};
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
