self.__BUILD_MANIFEST=function(e,t,a,i,s,o,n,r,c,d,u,p,b,l,g,h,k,f,m,v,y,x,B,w,I){return{__rewrites:{afterFiles:[],beforeFiles:[{has:a,source:"/embed/:docId*",destination:"/public/:docId*"},{has:a,source:"/templates/([\\w-]*-|):id(\\w+)",destination:"/templates/:id"},{has:a,source:"/folders/:channelSlug*",destination:"/"},{has:a,source:"/settings/(members|defaults)",destination:"/settings"},{has:a,source:"/sites/:siteId/pages/:pageId/preview",destination:"/sites/:siteId/pages/:pageId"},{has:a,source:"/docs/:docId/preview",destination:"/docs/:docId"},{has:[{type:"header",key:"user-agent",value:"(.*)(Googlebot\\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \\(Googlebot\\)|APIs-Google|bingbot|Slurp|LinkedInBot|msnbot|Adidxbot|facebookexternalhit|DuckDuckBot|Twitterbot|Facebot|BUbiNG|Applebot|Y!J|Slack-ImgProxy|SkypeUriPreview|Slackbot|Google-Adwords-Instant|WhatsApp|BingPreview\\/|Yahoo Link Preview|AppInsights|Discordbot|DuckDuckGo-Favicons-Bot|AppEngine-Google|Google Web Preview|google-xrawler|Google-Structured-Data-Testing-Tool|Google-PhysicalWeb|Google Favicon|Chrome-Lighthouse|HeadlessChrome|Google-Site-Verification|Google-Certificates-Bridge|Iframely|[wW]get|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|nutch|Go-http-client|phpcrawl|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|YandexBot|YandexImages|YandexAccessibilityBot|YandexMobileBot|YandexMetrika|YandexTurbo|YandexImageResizer|YandexVideo|YandexAdNet|YandexBlogs|YandexCalendar|YandexDirect|YandexFavicons|YaDirectFetcher|YandexForDomain|YandexMarket|YandexMedia|YandexMobileScreenShotBot|YandexNews|YandexOntoDB|YandexPagechecker|YandexPartner|YandexRCA|YandexSearchShop|YandexSitelinks|YandexSpravBot|YandexTracker|YandexVertis|YandexVerticals|YandexWebmaster|YandexScreenshotBot|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|TurnitinBot|scribdbot|page2rss|sitebot|linkdex|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot)(.*)"}],source:"/(docs|example|public)/:slug",destination:"/docs-robot/:slug"},{has:[{type:e,value:t}],source:"/de/pricing",destination:"/marketing/de/pricing"},{has:[{type:e,value:t}],source:"/en/pricing",destination:i},{has:[{type:e,value:t}],source:"/es/pricing",destination:"/marketing/es/pricing"},{has:[{type:e,value:t}],source:"/fr/pricing",destination:"/marketing/fr/pricing"},{has:[{type:e,value:t}],source:"/id/pricing",destination:"/marketing/id/pricing"},{has:[{type:e,value:t}],source:"/ja/pricing",destination:"/marketing/ja/pricing"},{has:[{type:e,value:t}],source:"/ko/pricing",destination:"/marketing/ko/pricing"},{has:[{type:e,value:t}],source:"/pt-br/pricing",destination:"/marketing/pt-br/pricing"},{has:[{type:e,value:t}],source:"/ru/pricing",destination:"/marketing/ru/pricing"},{has:[{type:e,value:t}],source:"/th/pricing",destination:"/marketing/th/pricing"},{has:[{type:e,value:t}],source:"/tr/pricing",destination:"/marketing/tr/pricing"},{has:[{type:e,value:t}],source:"/zh-cn/pricing",destination:"/marketing/zh-cn/pricing"},{has:[{type:e,value:t}],source:"/zh-tw/pricing",destination:"/marketing/zh-tw/pricing"},{has:[{type:e,value:t}],source:"/de",destination:"/marketing/de"},{has:[{type:e,value:t}],source:"/en",destination:"/marketing/en"},{has:[{type:e,value:t}],source:"/es",destination:"/marketing/es"},{has:[{type:e,value:t}],source:"/fr",destination:"/marketing/fr"},{has:[{type:e,value:t}],source:"/id",destination:"/marketing/id"},{has:[{type:e,value:t}],source:"/ja",destination:"/marketing/ja"},{has:[{type:e,value:t}],source:"/ko",destination:"/marketing/ko"},{has:[{type:e,value:t}],source:"/pt-br",destination:"/marketing/pt-br"},{has:[{type:e,value:t}],source:"/ru",destination:"/marketing/ru"},{has:[{type:e,value:t}],source:"/th",destination:"/marketing/th"},{has:[{type:e,value:t}],source:"/tr",destination:"/marketing/tr"},{has:[{type:e,value:t}],source:"/zh-cn",destination:"/marketing/zh-cn"},{has:[{type:e,value:t}],source:"/zh-tw",destination:"/marketing/zh-tw"},{has:[{type:e,value:t}],source:"/pricing",destination:i},{has:a,source:"/:path*.map",destination:"/404"}],fallback:[]},"/_error":["static/chunks/pages/_error-ab560b99a641fbee.js"],"/published/[docId]":[s,o,n,r,c,d,u,p,b,l,g,h,k,f,m,v,y,x,B,w,I,"static/chunks/pages/published/[docId]-c1cb020c36279ba5.js"],"/published_mobile/[docId]":[s,o,n,r,c,d,u,p,b,l,g,h,k,f,m,v,y,x,B,w,I,"static/chunks/pages/published_mobile/[docId]-d76d9a1fba333036.js"],sortedPages:["/_app","/_error","/published/[docId]","/published_mobile/[docId]"]}}("host","(gamma.app|[a-zA-Z0-9-]*-gamma-app.vercel.app)",void 0,"/marketing/en/pricing","static/chunks/5adc83ef-8e07286a1a4aed9b.js","static/chunks/93656207-7f4d297ad4bd581e.js","static/chunks/b4d7d80c-027091d6b91d779a.js","static/chunks/ad54e6ef-acfdf0c8fba2940d.js","static/chunks/69bd6bf3-bc248ffefb750b46.js","static/chunks/8c469d57-15109969c63e1543.js","static/chunks/2edb282b-a83f7ffd007bccf0.js","static/chunks/998ccc15-ad35dfdb33c695e6.js","static/chunks/b13ba9de-11ef9f2e07c3e310.js","static/chunks/91bbf309-aaf9ef7a7a89dd3c.js","static/chunks/ad943d25-7fe3a56c8d1cce87.js","static/chunks/b155a556-0d5fc585487af832.js","static/chunks/d08a6a05-4dafbbcaa95fed02.js","static/chunks/9b583bcd-17d841bbd10b7965.js","static/chunks/1035ef44-e4d66d81a61710cd.js","static/chunks/b779bb5e-2a65d4e63e363ec6.js","static/chunks/a29ae703-46d951b11c376d36.js","static/css/7f1bf32feb6a8541.css","static/chunks/1893-6256943fac77f5e0.js","static/chunks/4421-1fc9cd7ab2fb84eb.js","static/css/653e7bf73c631b0c.css"),self.__BUILD_MANIFEST_CB&&self.__BUILD_MANIFEST_CB();