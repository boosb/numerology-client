import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TYPES } from '../modal-auth/modal-auth.component';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent {

  public user: IUser | null = null;

  constructor(
    private authService: AuthService,
    public appService: AppService
  ) {
    authService.user$.subscribe(user => this.user = user);
  }

  showRegistrationDlg() {
    this.authService.setType(TYPES.refistration);
    this.authService.showDlg();
  }

  logout() {
    if(!this.user || !this.user.id) {
      return;
    }
    console.log('hello')
    this.authService.logout(this.user.id).subscribe(user => this.authService.setUser(user));
  }
}
