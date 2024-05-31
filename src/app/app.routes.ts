import { Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        providers: [
            AuthService,
            AppService
        ]
    },
];
