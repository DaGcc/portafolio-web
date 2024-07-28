import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes,withViewTransitions(), withHashLocation()),
    // provideClientHydration(),
    // provideAnimations(),
    provideHttpClient(
      withFetch()
    )
  ]
};
