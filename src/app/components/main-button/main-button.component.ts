import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TYPES } from '../modal-auth/modal-auth.component';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent implements OnInit, OnDestroy {

  public user: IUser | null = null;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.authService.user$.unsubscribe();
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
