import { Component } from '@angular/core';
import { TYPES } from '../modal-auth/modal-auth.component';
import { AuthService } from '../../services/auth.service';
import { AppService, PAGES } from '../../services/app.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  constructor(
    private authService: AuthService,
    private appService: AppService
  ) {}

  showRegistrationDlg() {
    this.authService.setType(TYPES.refistration);
    this.authService.showDlg();
  }

  showLogInDlg() {
    this.authService.setType(TYPES.login);
    this.authService.showDlg();
  }

  // todo test method
  onSettings() {
    this.appService.setPage(PAGES.SETTINGS);
  }
}
