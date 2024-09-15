import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImgService } from '../../services/img.service';
import { ModalService, TYPES } from '../../services/modal.service';

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

  public dlgTypes = TYPES;
  
  get isGoodUser() {
    return this.user && this.user.isConfirmed;
  }

  constructor(
    public imgService: ImgService,
    public modalService: ModalService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
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
