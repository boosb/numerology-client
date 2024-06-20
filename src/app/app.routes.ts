import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthGuard } from './helpers/auth.guard';
import { MainPageGuard } from './helpers/main-page.guard';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        canActivate: [MainPageGuard]
    },
    {
        path: 'settings',
        component: SettingPageComponent,

        // todo пока что просто добавил гуард, в дальнейшем мб добавить вариативности
        canActivate: [AuthGuard]
    },
    {
        path: 'forecast',
        component: ForecastPageComponent,

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
