import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // HashStrategy para urls incompletas o que diga que no se encuentra la pagina después de suvirlo
    // a un servidor
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }

  ]
};
