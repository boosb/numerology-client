import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coins-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coins-button.component.html',
  styleUrl: './coins-button.component.scss'
})
export class CoinsButtonComponent implements OnInit, OnDestroy {
  // todo что касается юзера одинаково с main-button, хорошо бы отрефакторить в дальнейшем
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

  onWallet() {
    // todo переход на страницу пополнения кошелька
    //this.router.navigateByUrl('/profile');
  }
}
