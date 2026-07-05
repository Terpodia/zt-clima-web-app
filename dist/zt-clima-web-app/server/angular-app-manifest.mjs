
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
    'index.csr.html': {size: 5039, hash: '4e32810aaf4595ddce7e0b1dced196eda2cbc789c6f7e655ff1d4dbf34040f52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4076, hash: '1006ebae52350c5794e2d60cbe6307c226121d62d856470dd134942840531b73', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-GH7BIH4B.css': {size: 2540, hash: 'l1hWNBDwoeU', text: () => import('./assets-chunks/styles-GH7BIH4B_css.mjs').then(m => m.default)}
  },
};
