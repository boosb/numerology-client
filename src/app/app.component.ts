import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ModalAuthComponent } from "./components/modal-auth/modal-auth.component";
import { MainButtonComponent } from "./components/main-button/main-button.component";
import { AppService, PAGES } from './services/app.service';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';

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
      RouterOutlet
    ]
})
export class AppComponent implements OnInit {

  page: string | null = null;

  constructor(
    public authService: AuthService,
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.page$.subscribe(page => this.page = page);
  }

  _isSettingPage() {
    return this.page === PAGES.SETTINGS;
  }

  _isMainPage() {
    return this.page === PAGES.MAIN;
  }
}