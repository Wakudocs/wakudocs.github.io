if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,d)=>{const f=s||("document"in self?document.currentScript.src:"")||location.href;if(e[f])return;let b={};const r=s=>a(s,f),i={module:{uri:f},exports:b,require:r};e[f]=Promise.all(c.map((s=>i[s]||r(s)))).then((s=>(d(...s),b)))}}define(["./workbox-6db16f92"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.html-1ab2d20c.js",revision:"ef8158a89f784f9395588b50a2d3e28f"},{url:"assets/404.html-73b147e2.js",revision:"ed51206066d27d9291cd0f49e9d4d104"},{url:"assets/align.html-024811df.js",revision:"cdb8c0986e3e3743c7b67044c36387fc"},{url:"assets/align.html-d558821b.js",revision:"2faf36881c4513eef9ac29f45625b47a"},{url:"assets/apkxa.html-2b1fb84c.js",revision:"70b6513b59569185dbe2b8031625ed94"},{url:"assets/apkxa.html-c0f03b02.js",revision:"6c4ceffdb419bddfe2bfedc056bf63e2"},{url:"assets/app-a75da3f8.js",revision:"fdff00e7c6fb6abf6e5376c62c7a1b53"},{url:"assets/app.html-340b42cf.js",revision:"5c667d2e319a6edaa99f0dabe63838d3"},{url:"assets/app.html-9b4e17d3.js",revision:"b7bd51cadacdbd07414fa945fd35363b"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/BP.html-527f9a05.js",revision:"4b7ae07e84f6384071a79a866f9ce424"},{url:"assets/BP.html-e9c5cd73.js",revision:"c06b90366728bc7c3af64186ca86b330"},{url:"assets/BS.html-0d5f95d3.js",revision:"f30c05aca9c21e2fb54fb2ef9367750e"},{url:"assets/BS.html-682775f4.js",revision:"fae069096d932d5e95c272966271a562"},{url:"assets/card.html-74e1592a.js",revision:"0a9ff269d6384e214eef94c3d34fae76"},{url:"assets/card.html-9783b5c9.js",revision:"728095e51b054c1db71beeff6883ae28"},{url:"assets/chart.html-33b1fa06.js",revision:"19589e419862bc4abbfc28ec6a852d04"},{url:"assets/chart.html-82f52045.js",revision:"cdb63d57bdf3d5572a15706d3b70339f"},{url:"assets/cn.html-2c5d43a9.js",revision:"348846fb12c38ad7e493073cef4b7162"},{url:"assets/cn.html-8e6bd7d5.js",revision:"296465508e3b4575dc9cc8e75bb3444a"},{url:"assets/container.html-a7106cbd.js",revision:"a265e94afca766d10f23964afd141a77"},{url:"assets/container.html-bfdcfc1c.js",revision:"3d472364167b8e2f4ee42454a2e35a2b"},{url:"assets/ct.html-d884d1c6.js",revision:"aec42a5d9bea246adee5317b769a1872"},{url:"assets/ct.html-e6c15035.js",revision:"1d022d027e42b7d3783538d5328cb71f"},{url:"assets/ctto.html-3d794e6c.js",revision:"01d2759791d90f160815d7b1feb7d99c"},{url:"assets/ctto.html-57da7628.js",revision:"d4bdadedba0ce5440070ac32c8296108"},{url:"assets/CYCT.html-1d15113a.js",revision:"b51fc9509ac7e6bffad87b6dcc2a865d"},{url:"assets/CYCT.html-318030a9.js",revision:"5fd0b7820805c0d3a063db1c4f1858b1"},{url:"assets/DE.html-091bdef1.js",revision:"667846662d66033e7008e482e0a35e69"},{url:"assets/DE.html-cb195619.js",revision:"965e702ce0ad80e6d58c5295d283d14d"},{url:"assets/echarts.html-130f5551.js",revision:"1d089a5687942633d1587b8e8644f508"},{url:"assets/echarts.html-f5f3345f.js",revision:"e4356cee5736901684e5eff6330dcea4"},{url:"assets/EGG.html-21ee89f2.js",revision:"6665485c4bba36f8d1f1596809e121a1"},{url:"assets/EGG.html-31891740.js",revision:"5fa7ed0a2bca033bc4dc8984ee0c4472"},{url:"assets/external.html-38360982.js",revision:"07205ae5fa8c9d8b4b96d2fafec79fb0"},{url:"assets/external.html-5910576b.js",revision:"ef26ac17bf9b6cdc028b161888afd245"},{url:"assets/game-info.html-37de2462.js",revision:"d621ea8383fd47d631b731b080aeaa94"},{url:"assets/game-info.html-99a9bcbc.js",revision:"dc48c83f9c629ba7216ee38e184a44d8"},{url:"assets/Game.html-c62b024b.js",revision:"ced4e093e96997e619a349cb9d624008"},{url:"assets/Game.html-cd79a93a.js",revision:"a6eb11ce7f689f42a54a28a5c000c507"},{url:"assets/GO.html-805b8e86.js",revision:"1f08938e11fa92b47b482526a2dc015c"},{url:"assets/GO.html-86810b07.js",revision:"4accbdc75cf23859c7b5771be9899689"},{url:"assets/Google.html-72838480.js",revision:"634146a5c8916b9397b616f990402512"},{url:"assets/Google.html-9c1005d9.js",revision:"c7c9928ae8899c43bc7383e5a3081144"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index.html-0d9ad396.js",revision:"f83b701a1b830955a0734fc1a93f08b4"},{url:"assets/index.html-237e2a74.js",revision:"671f8b7123fa0fdab5185f2cdeb853bc"},{url:"assets/index.html-431cc447.js",revision:"eca9a61e04828601d32462474ee05e89"},{url:"assets/index.html-6263fa06.js",revision:"58d5a7f12e0fb3c65bbfc2a8d140da1d"},{url:"assets/index.html-7ab73f82.js",revision:"eec215190e627f330e7c86731159127c"},{url:"assets/index.html-7d157a8c.js",revision:"c9f299e7e5bdde1ee2a5a88a18d97ae2"},{url:"assets/index.html-8ce3ba73.js",revision:"9acfc8efd6c68bf4de1bfa7b0dfd3d5e"},{url:"assets/index.html-a50919ad.js",revision:"070e6026cdf5c413b58529f21b2276ac"},{url:"assets/index.html-c17e5efc.js",revision:"58ddd49ee4276689f8529161088b977a"},{url:"assets/index.html-f13071c5.js",revision:"ebec76746b961a2391defa64303b2b45"},{url:"assets/info.html-1599c2d2.js",revision:"aa2130605d61f9f90e8109405a47ec63"},{url:"assets/info.html-523a0350.js",revision:"2407a65ae9736823dbbbe14299e366c3"},{url:"assets/JC.html-32fda08f.js",revision:"711c50011ca37cea0c9e8213a7a5be81"},{url:"assets/JC.html-9d055679.js",revision:"af80cbaf475c205bbb47d94c881d4028"},{url:"assets/JD.html-52dd4124.js",revision:"52d0816529896f29863f2c9862f5e0eb"},{url:"assets/JD.html-d4225979.js",revision:"4b9de05746791d3eb16b281188377c41"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/LJ.html-4284eea5.js",revision:"e4607a4980a6874b4abb18d18c251fee"},{url:"assets/LJ.html-bc77793a.js",revision:"155f6fc1f5382807a957de31b7ab3678"},{url:"assets/LT.html-0cf1d1a0.js",revision:"ebd44bbb0888b3abd9e912714f2edecf"},{url:"assets/LT.html-e6a333bf.js",revision:"6d9c771512cb68b3da52d18be19de592"},{url:"assets/mark.html-0176b26e.js",revision:"f695766ef82e6a0b81ebff8e81a09404"},{url:"assets/mark.html-96cf502d.js",revision:"27c526525a0ba303bb049905cb823887"},{url:"assets/markdown.esm-9d5bc2ce.js",revision:"00403f340754f834b0b81192f798dd6d"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/md.html-a5f917e4.js",revision:"aad2bbbf7d71ee8e98771676243b6a63"},{url:"assets/md.html-e1319533.js",revision:"d37a01b7890cdda6772b263f8a33e0da"},{url:"assets/mod.html-5f6c99a2.js",revision:"407b090fde28ecf39e3a3b06b83a27fd"},{url:"assets/mod.html-93c02a0c.js",revision:"e088c342a0f6890f8f377f3f87626466"},{url:"assets/musk.html-47c92b29.js",revision:"d9642268ff50a847a94bf7b990c424c2"},{url:"assets/musk.html-7e44ccef.js",revision:"c6136d81ca186ffd8078fb31aaf50ccd"},{url:"assets/mw68.html-19d422ca.js",revision:"6ad8e2656c0d37360714edaf85fffc68"},{url:"assets/mw68.html-dd92f675.js",revision:"73c02180fd1ec0682076e0d386e4d407"},{url:"assets/mw70.html-0b658fcf.js",revision:"96cf3cb90c5e8d35e42a7c0d8caa59a6"},{url:"assets/mw70.html-74d6b3ac.js",revision:"0b3aa33636e3bc190c163af4dcc7134b"},{url:"assets/mwdocs-app.html-32079f10.js",revision:"d1ad7bc5387da68b6592e33d4f31ecb4"},{url:"assets/mwdocs-app.html-f364412e.js",revision:"e5e59a5e64611c4574a4cad81b131e24"},{url:"assets/nature.html-05d31714.js",revision:"a1f7b65a62b4c96737eb41d1b559537f"},{url:"assets/nature.html-2a93cd6c.js",revision:"2e7c7df259c99084d3281338840aa037"},{url:"assets/news.html-4ba94bbd.js",revision:"f11f758eed39b7142f7806e79a54d225"},{url:"assets/news.html-b1ce8ce4.js",revision:"3cc7890f3e85dd2474285e27e357ea78"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/object.html-efbcdc8c.js",revision:"094235fba1beaa6bdf855839c47bcc88"},{url:"assets/object.html-fe12f1b6.js",revision:"49ab9d38352a2973a1ce56f62002197b"},{url:"assets/pan.html-9d018189.js",revision:"a40bed7e5969eaca100cf85e1da89cdf"},{url:"assets/pan.html-e2538173.js",revision:"1c59aba9567e05ce4fe20f5067163007"},{url:"assets/PC.html-d2f62d10.js",revision:"4e7a7cf5344356a63eab460737b2dd17"},{url:"assets/PC.html-ebbd2c10.js",revision:"3bbec8a8747fa8c3d2524587c65bfae8"},{url:"assets/people.html-1e448b48.js",revision:"27b842cff93d724f88aed256aa195e10"},{url:"assets/people.html-318ca759.js",revision:"abb44acf7b7e062f6507694fc503e3c0"},{url:"assets/place.html-4478fb37.js",revision:"514a6807edfc425a14e6ecb457d52e4d"},{url:"assets/place.html-b38e4c15.js",revision:"c13fd5b61e74f828b70c898b36bf8fc1"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/presentation.html-4c9bc416.js",revision:"6c23b0863caf8f73625cb813ae15c2b3"},{url:"assets/presentation.html-893fc14a.js",revision:"d91d78e29f6d04d57c97c6553ec8311e"},{url:"assets/qnsj.html-3a9f01e8.js",revision:"0ec056f6edd54d24ba7670c6cbf65702"},{url:"assets/qnsj.html-682ecbbd.js",revision:"1e9634b63a5278d9e222e20b54025808"},{url:"assets/QT.html-0ec12d3a.js",revision:"2a0c6e3761565a4af1b4f529a4b0b79f"},{url:"assets/QT.html-25722e5d.js",revision:"ec15d70a7a68297141440098d2eff6a5"},{url:"assets/reveal.esm-1a4c3ae7.js",revision:"fc90b48ee14a4f200f16eadd1328ff85"},{url:"assets/SC.html-99d8ba66.js",revision:"4d0a789e503c5464b1351d95a4c83e82"},{url:"assets/SC.html-e4d3ee83.js",revision:"d7a56ae766ebdf2e70e5c1def93983bf"},{url:"assets/SD.html-8df0c50f.js",revision:"e50fa9dfa786fab47381cb26a4089fd0"},{url:"assets/SD.html-b249a9dd.js",revision:"9688ede3b2c3e93f194a4f24640c4d5d"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/SearchResult-73dff2f0.js",revision:"d690f07a1bf37003da7ebfdf191c231f"},{url:"assets/SMS.html-0a441d0d.js",revision:"f43601359bd4e16c8fefad7d6278b228"},{url:"assets/SMS.html-28a755c1.js",revision:"d8c79745adb8613079bf384791f74f5e"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-5a4ad09d.css",revision:"ffca7f02627cf86a9966092df3ef60ad"},{url:"assets/sup-sub.html-4ededf5b.js",revision:"a4397f08af42e65b53dfba4e2f10c7ae"},{url:"assets/sup-sub.html-622d7e13.js",revision:"b6519b38b026fdaeb436771197516205"},{url:"assets/symbol.html-528b2508.js",revision:"60a6045074d323677fb5956471d46721"},{url:"assets/symbol.html-5905ecc3.js",revision:"79e8763fbef95887b4c7e6f3d99db5d9"},{url:"assets/sys.html-2b09702c.js",revision:"b53bfe5ca4e65fa970c6a5c5f7c54f57"},{url:"assets/sys.html-2f9f6b87.js",revision:"62515f20b9f266edb716133bbc088bbe"},{url:"assets/tabs.html-505c4637.js",revision:"e38e4ca78908ccbbfd0c49e575e518eb"},{url:"assets/tabs.html-c466f7ac.js",revision:"da8dbdb5758eafa430ffbaf7e2ed48ec"},{url:"assets/tasklist.html-c0e57921.js",revision:"5966351d2ed913fb80a0ef967807b09c"},{url:"assets/tasklist.html-cdabf402.js",revision:"a38580fe8c9675144f6e1c37add8b228"},{url:"assets/UP.html-2abd001a.js",revision:"1b24c8d9fb921047b987504cd3a7dc82"},{url:"assets/UP.html-abb501a0.js",revision:"2453558fcc92a098d2ab1b0cde8a57e6"},{url:"assets/WF.html-a584e8f4.js",revision:"b7c037272db616e1238872ca1a771ff5"},{url:"assets/WF.html-b3a4f2ba.js",revision:"79595e0fc891c63e20a45d2716ab20bd"},{url:"assets/YJ.html-83744340.js",revision:"4e0eb83c922487bcce2c64ebb330ff9c"},{url:"assets/YJ.html-d85c1c6b.js",revision:"8016d2e7ae34a6977a4cdf1198bb01cd"},{url:"assets/ZB.html-818bc9ca.js",revision:"c61a6a2338c93fc1536370d470ec7806"},{url:"assets/ZB.html-e1849d9d.js",revision:"1b652b9b7d18a76e4af853176f219ce8"},{url:"assets/ZD.html-5c549b43.js",revision:"3cd8f2cd164d9124accc775a1551ca1a"},{url:"assets/ZD.html-69500b73.js",revision:"3e23b63b40ea17c9c35b344baf8b7981"},{url:"assets/ZG.html-6f73fce9.js",revision:"6698193f12cb384183746983e146470a"},{url:"assets/ZG.html-7b8339d4.js",revision:"305d5d39c579be9e4044960493a39c43"},{url:"assets/ZH.html-46187fb2.js",revision:"a599b60e95ef45a8fe1d4c0a2a840dc1"},{url:"assets/ZH.html-90520ee7.js",revision:"99e4fa94833c86950b4047a15904bf5a"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"assets/ZY.html-737c8aef.js",revision:"fc66f44ef787751ceab776070793fd2a"},{url:"assets/ZY.html-7c2104a3.js",revision:"3f9cef3dc33017b0b09b84338a4326ee"},{url:"index.html",revision:"3301e8ac251583b72764e02083a29589"},{url:"404.html",revision:"c315628d1d2fd154d09dc5326ee25d8f"}],{}),s.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
