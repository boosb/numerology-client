import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ModalAuthComponent } from "./components/modal-auth/modal-auth.component";
import { MainButtonComponent } from "./components/main-button/main-button.component";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { JwtInterceptor } from './helpers/jwt-interceptor';

// todo Хорошо бы в конце шлифануть package.json, как минимум использование angular material не оч релевантно
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
      CommonModule,
      ModalAuthComponent, 
      MainButtonComponent, 
      MainPageComponent,
      SettingPageComponent,
      ForecastPageComponent,
      RouterLink,
      RouterOutlet
    ]
})
export class AppComponent {
  
}