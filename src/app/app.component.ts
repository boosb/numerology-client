import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ModalAuthComponent } from "./components/modal-auth/modal-auth.component";
import { MainButtonComponent } from "./components/main-button/main-button.component";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SettingPageComponent } from './pages/setting-page/setting-page.component';
import { DailyForecastPageComponent } from './pages/daily-forecast-page/daily-forecast-page.component';

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
      DailyForecastPageComponent,
      RouterOutlet
    ]
})
export class AppComponent {

  constructor(
    public authService: AuthService,
  ) {}
}