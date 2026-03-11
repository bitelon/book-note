import { APP_INITIALIZER, ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { BookControllerService } from './services/book-controller.service';
import { provideIonicAngular } from '@ionic/angular/standalone';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideIonicAngular({ mode: 'ios' }),
    {
      provide: APP_INITIALIZER,
      useFactory: (bookService: BookControllerService) => () => bookService.init(),
      deps: [BookControllerService],
      multi: true,
    },
  ],
};
