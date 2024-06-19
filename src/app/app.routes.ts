import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { DailyForecastPageComponent } from './pages/daily-forecast-page/daily-forecast-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthGuard } from './helpers/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'settings',
        component: SettingPageComponent,

        // todo пока что просто добавил гуард, в дальнейшем мб добавить вариативности
        canActivate: [AuthGuard]
    },
    {
        path: 'forecast',
        component: DailyForecastPageComponent,

        // todo пока что просто добавил гуард, в дальнейшем мб добавить вариативности
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfilePageComponent,

        // todo пока что просто добавил гуард, в дальнейшем мб добавить вариативности
        canActivate: [AuthGuard]
    },

    //todo добавить **
];
