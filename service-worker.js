/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a2ca0e0d6fad0427291e0f5f684679b2"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/css/0.styles.75e8a466.css",
    "revision": "1bb69ceb4fc9513bcdf7bcd573a4e6e8"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.f6be2cad.js",
    "revision": "151c0ef227035d93eb3921f2c32260af"
  },
  {
    "url": "assets/js/11.9a0cc1b3.js",
    "revision": "b92e0941d450309c4d589b04d5adb1dd"
  },
  {
    "url": "assets/js/12.c42f4496.js",
    "revision": "c18c244c69540d0d3bbc0efe3fe0ca7e"
  },
  {
    "url": "assets/js/13.38c49676.js",
    "revision": "473faf726af2c05dd9b7a1090dea769d"
  },
  {
    "url": "assets/js/14.87fa8030.js",
    "revision": "f47b0323bfd60360b57532ee2bdc625c"
  },
  {
    "url": "assets/js/15.9e7d3bc2.js",
    "revision": "d6ce94ea8f5066df71601207a2862f6f"
  },
  {
    "url": "assets/js/16.00fca7d2.js",
    "revision": "e55c2093641a0ad8a1a8f80df22b84b0"
  },
  {
    "url": "assets/js/17.19a4b127.js",
    "revision": "f46c3ae6a9bc3cb01977883aed14f83d"
  },
  {
    "url": "assets/js/18.5cb3f6b1.js",
    "revision": "bff14d3be31dcdb946280d534e68cabb"
  },
  {
    "url": "assets/js/19.5df98c79.js",
    "revision": "26c49e3ba79ba778110ccafa81aba619"
  },
  {
    "url": "assets/js/2.3e792822.js",
    "revision": "1b46daf22ebd8887f2e361069d11dce1"
  },
  {
    "url": "assets/js/20.29e3ba30.js",
    "revision": "a4f0a21f62284d02c4b9f6dd638c74b2"
  },
  {
    "url": "assets/js/21.7cf0f4c4.js",
    "revision": "d88bc05199cfc1e2137ebc799f0041c1"
  },
  {
    "url": "assets/js/22.694e6f54.js",
    "revision": "f9e40dbdcbabcaf27e022bdaab5b0a97"
  },
  {
    "url": "assets/js/23.adfd96bc.js",
    "revision": "2571c0d6bfec6183529a118da846ec97"
  },
  {
    "url": "assets/js/24.1e7e5724.js",
    "revision": "7ad225eb26c36acab24f1371096aa6fd"
  },
  {
    "url": "assets/js/25.9436fca7.js",
    "revision": "1cb551be1b080c006ca12893e791a8d8"
  },
  {
    "url": "assets/js/26.ce085632.js",
    "revision": "163fceae84e61a760394d612f4259528"
  },
  {
    "url": "assets/js/27.91a8f43d.js",
    "revision": "2f18bb70cc16906fc5370793682dc1bc"
  },
  {
    "url": "assets/js/28.671fbf4f.js",
    "revision": "714fa5ab29be6aae9c7e3e2c40f3f612"
  },
  {
    "url": "assets/js/29.07ed1e5a.js",
    "revision": "330bd31e9fcf0f2901909633cfb84d57"
  },
  {
    "url": "assets/js/3.68722fa0.js",
    "revision": "4aa4eef5dbf2686516a7ddfb862a8c4a"
  },
  {
    "url": "assets/js/30.265b4edd.js",
    "revision": "202b87b7aec37c0535332931ded23b40"
  },
  {
    "url": "assets/js/31.91d8fa40.js",
    "revision": "36d618930e5a6be24c9740ccaa6ef95b"
  },
  {
    "url": "assets/js/32.8d1b36e6.js",
    "revision": "e67970fb6593438c1abd296583f41267"
  },
  {
    "url": "assets/js/33.7b973ebb.js",
    "revision": "b9f0eb7e4b39c426613b284883faa1f2"
  },
  {
    "url": "assets/js/34.4d0a057f.js",
    "revision": "6e2d07a7097c201ba4e8e1f80e2e7336"
  },
  {
    "url": "assets/js/35.d55e411d.js",
    "revision": "05a179ff2b61987273c4454b573836b3"
  },
  {
    "url": "assets/js/36.1139f2b5.js",
    "revision": "554303d5aba848b6448a3b141eca177a"
  },
  {
    "url": "assets/js/37.e5a990f3.js",
    "revision": "cb40af08a700c40c238923d75b82a6b8"
  },
  {
    "url": "assets/js/38.8c41e342.js",
    "revision": "f6280539c4ec99215d625058cc82ad15"
  },
  {
    "url": "assets/js/39.180a8774.js",
    "revision": "c6c4e22959c4c0f547484047783b15ff"
  },
  {
    "url": "assets/js/4.f7e69784.js",
    "revision": "3cc5e360973bce689326fd045475f0aa"
  },
  {
    "url": "assets/js/40.2e9b9ac7.js",
    "revision": "2b04417a92323081b34b7b470e801a68"
  },
  {
    "url": "assets/js/5.e8d3c454.js",
    "revision": "4ef7b6462f4ffa58045fa1c350c085c7"
  },
  {
    "url": "assets/js/6.ce738e16.js",
    "revision": "84f875c7c014866625f8c7320ea4ab6b"
  },
  {
    "url": "assets/js/7.3c0a5da0.js",
    "revision": "722b0e9bdae7db24ad72f780b2b5e20f"
  },
  {
    "url": "assets/js/8.668cf86e.js",
    "revision": "5ab0abbe7a9970e3b4a2b112e4df67a4"
  },
  {
    "url": "assets/js/9.1ee6de16.js",
    "revision": "ee461d6669f6be00da86fb73dbcc1671"
  },
  {
    "url": "assets/js/app.ae2e50b3.js",
    "revision": "0c41ed372210839b67a5f6ac96396160"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "78d77541cabc832c76d7f063d865a648"
  },
  {
    "url": "complie/codegen.html",
    "revision": "06030a2f8ae47d8a78951f310ef35a66"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "44635824bc8c8526f25f838f53ba1e21"
  },
  {
    "url": "complie/index.html",
    "revision": "aac1309f8c7a4db7dbdf23a5117bdbf0"
  },
  {
    "url": "complie/optimize.html",
    "revision": "d2ef5a535dc69c3ab1b00cb24f86d909"
  },
  {
    "url": "complie/parse.html",
    "revision": "8be1b33c83e41df0b61e680155d051f7"
  },
  {
    "url": "complie/summary.html",
    "revision": "3b20ff660621b998371623e3d3528674"
  },
  {
    "url": "complie/textParse.html",
    "revision": "84309a8fe80ba7664350a260dd1dbd91"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "2a02bc3c97f14bd0a26656677bdc5432"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "33a21f9481987ca1817def738169dd42"
  },
  {
    "url": "filter/index.html",
    "revision": "f172820fe1d447b71dfda3cf7bec22c8"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "b285a67dd09eb5f75b0a94ac501be00f"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "90950da605fa4370bf61b90cb2097635"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "5105b248aad909bc45036fd07f63460c"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "3ff19bf7e4de9cfd6646cc24146efe43"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "a1367d2cfd46a21e52357ce7a82f1c44"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "e043131c31fe8bf31d10b5162a432551"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "0199bc90928109e384633506adda82c5"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "49b1904da78d305c52f0772c49676ab6"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "ff67973830ba1d4e5419ed7fa209e2bb"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "aff90f99218baf84cea2c5606dbd733d"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "82adc95e53c7765d38571909f1b42e81"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "b48596e5afb59b52f67fae4e35be1924"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "14517af35ebda43f4f8c4c3ee0b6452a"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "966ea2bf10971ef31ec3dc4be7c17335"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "5fdac5859ec317a3701a9811b9e0e7f7"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "9023114af48ffa8e50e8a3ad8e27fcf2"
  },
  {
    "url": "reactive/index.html",
    "revision": "83dc843cf50ff7a32f7a1671190e1d99"
  },
  {
    "url": "reactive/object.html",
    "revision": "35593d1b761154af0c131f8871dc1211"
  },
  {
    "url": "start/index.html",
    "revision": "d401372ce2ab89219ce62e13aea63e6d"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "b002a62ec1da63a66571e95540a6499a"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "69dd45621dfd6ab11a5cad15369759d1"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "4812f65b1fddbac8e4a2b1ff1f42ecc4"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "c0ee2b43b0322cca0b931f969a44cf50"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
