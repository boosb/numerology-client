import { Component } from '@angular/core';
import { ModalAuthComponent, TYPES } from '../../components/modal-auth/modal-auth.component';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ModalAuthComponent,
    RouterLink
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  constructor(
    public authService: AuthService,
  ) {}

  showRegistrationDlg() {
    this.authService.setType(TYPES.refistration);
    this.authService.showDlg();
  }

  showLogInDlg() {
    this.authService.setType(TYPES.login);
    this.authService.showDlg();
  }
}
