import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { DailyForecastPageComponent } from './pages/daily-forecast-page/daily-forecast-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        providers: [
            AuthService,
        ]
    },
    {
        path: 'settings',
        component: SettingPageComponent,
        providers: [
            AuthService,
        ]
    },
    {
        path: 'daily-forecast',
        component: DailyForecastPageComponent,
        providers: [   ]
    },
];
