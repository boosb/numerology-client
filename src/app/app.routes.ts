import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { AppService } from './services/app.service';
import { SettingPageComponent } from './components/setting-page/setting-page.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        providers: [
            AuthService,
            AppService
        ]
    },
    {
        path: 'settings',
        component: SettingPageComponent,
        providers: [
            AuthService,
            AppService
        ]
    },
];
