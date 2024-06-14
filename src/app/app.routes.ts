import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { DailyForecastPageComponent } from './pages/daily-forecast-page/daily-forecast-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'settings',
        component: SettingPageComponent,
    },
    {
        path: 'daily-forecast',
        component: DailyForecastPageComponent,
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
    },
];
