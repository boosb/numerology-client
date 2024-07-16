import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AuthGuard } from './helpers/auth.guard';
import { MainPageGuard } from './helpers/main-page.guard';
import { BuyPageComponent } from './pages/buy-page/buy-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
        canActivate: [MainPageGuard]
    },
    {
        path: 'settings',
        component: SettingPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'forecast',
        component: ForecastPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfilePageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'buy',
        component: BuyPageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
