import { Injectable, Inject, DOCUMENT } from '@angular/core';

import { Meta } from '@angular/platform-browser';

const BASE_URL = 'https://www.ztclima.com.ar';
const DEFAULT_IMAGE = `${BASE_URL}/assets/og-image.jpg`;

export interface PageSeo {
  title: string;
  description: string;
  /** Ruta con barra inicial, ej: '/aire' ('' para la home). */
  path: string;
  image?: string;
  noindex?: boolean;
}

/** Setea description, canonical, Open Graph y Twitter card por página (SSR-safe). */
@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly doc: Document
  ) {}

  set(seo: PageSeo) {
    const url = `${BASE_URL}${seo.path}`;
    const image = seo.image ?? DEFAULT_IMAGE;

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({
      name: 'robots',
      content: seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'es_AR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'ZT Clima' });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
