import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImgService } from '../../services/img.service';
import { Subscription } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-coins-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coins-button.component.html',
  styleUrl: './coins-button.component.scss'
})
export class CoinsButtonComponent {
  private userSubs: Subscription;

  public user: IUser | null = null;
  
  constructor(
    public imgService: ImgService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  onBuy() {
    this.router.navigateByUrl('/buy');
  }
}
