import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';
export const appConfig: ApplicationConfig = {
  
  providers: [
    provideRouter(routes,withViewTransitions(), withHashLocation()),
    // provideClientHydration(),
    // provideAnimations(),
    provideHttpClient(
      withFetch()
    ),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },

    //* solo para modulos 
    // importProvidersFrom([ 
    //   HttpClientModule
    // ])
  ]
};
