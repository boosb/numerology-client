import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ModalAuthComponent, TYPES } from "./components/modal-auth/modal-auth.component";
import { MainButtonComponent } from "./components/main-button/main-button.component";

// todo Хорошо бы в конце шлифануть package.json, как минимум использование angular material не оч релевантно
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ModalAuthComponent, MainButtonComponent]
})
export class AppComponent {
  constructor(
    public authService: AuthService
  ) {}

  title = 'numerology-client'; // todo рудимент

  showRegistrationDlg() {
    this.authService.setType(TYPES.refistration);
    this.authService.showDlg();
  }

  showLogInDlg() {
    this.authService.setType(TYPES.login);
    this.authService.showDlg();
  }
}