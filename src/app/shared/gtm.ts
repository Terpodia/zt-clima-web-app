// Push directo al dataLayer de Google Tag Manager (el script gtm.js se
// carga diferido desde index.html). SSR-safe: no hace nada en el servidor.
export function pushGtmEvent(event: Record<string, unknown>): void {
  if (typeof window === 'undefined') {
    return;
  }
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push(event);
}
