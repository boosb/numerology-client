import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './helpers/jwt-interceptor';
import { RefreshInterceptor } from './helpers/refresh-interceptor';
import { AuthService } from './services/auth.service';
import { appInitializer } from './helpers/app.initializer';
import { UserService } from './services/user.service';
import { ForecastService } from './services/forecast.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(FormsModule),
    importProvidersFrom(ReactiveFormsModule),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshInterceptor,
      multi: true,
    },

    AuthService,
    UserService,
    ForecastService
  ]
};
