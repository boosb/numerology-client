import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TYPES } from '../modal-auth/modal-auth.component';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.scss'
})
export class MainButtonComponent implements OnInit, OnDestroy {

  private userSubs: Subscription;

  public user: IUser | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  showRegistrationDlg() {
    this.authService.setType(TYPES.refistration);
    this.authService.showDlg();
  }

  logout() {
    if(!this.user) {
      return;
    }

    this.authService.logout().subscribe();
  }

  onProfile() {
    this.router.navigateByUrl('/profile');
  }
}
