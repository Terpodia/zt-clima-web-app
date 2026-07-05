import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    // Experimental: change detection sin zone.js (menos JS, sin monkey-patching
    // de APIs del navegador). Requiere que los cambios de estado fuera de
    // eventos de template notifiquen manualmente (signals o detectChanges).
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ),
    provideClientHydration(),
    { provide: 'googleTagManagerId', useValue: 'GTM-KVP4PQHH' },
  ],
};
