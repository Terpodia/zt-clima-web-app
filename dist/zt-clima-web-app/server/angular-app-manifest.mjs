
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/aire/aire.component.ts": [
    "chunk-OG6ECGSE.js",
    "chunk-UZ6KE6F5.js"
  ],
  "src/app/pages/calefaccion/calefaccion.component.ts": [
    "chunk-NHAX77BY.js",
    "chunk-UZ6KE6F5.js"
  ],
  "src/app/pages/nosotros/nosotros.component.ts": [
    "chunk-A6X7RMHF.js",
    "chunk-UZ6KE6F5.js"
  ],
  "src/app/pages/message-send/message-send.component.ts": [
    "chunk-4I5SCW5D.js"
  ],
  "src/app/pages/not-found/not-found.component.ts": [
    "chunk-IYMJ5R2W.js"
  ]
},
  assets: {
    'index.csr.html': {size: 5039, hash: '126149954f3776d9464f6db6f15a95ef1f1dbb23263aff68567e075887bdab08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4076, hash: '03000f9dce28dc3cf15e62e765ea76769fd9827a5d05b1280e9f6d29e726ac08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-H7P4ARY2.css': {size: 2540, hash: 'v3Nv0w20nCg', text: () => import('./assets-chunks/styles-H7P4ARY2_css.mjs').then(m => m.default)}
  },
};
