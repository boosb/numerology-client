import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyForecastItemComponent } from '../../components/daily-forecast-item/daily-forecast-item.component';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../../services/forecast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-daily-forecast-page',
  standalone: true,
  imports: [CommonModule, DailyForecastItemComponent],
  templateUrl: './forecast-page.component.html',
  styleUrl: './forecast-page.component.scss'
})
export class ForecastPageComponent implements OnInit, OnDestroy {
  private userSubs: Subscription;

  // todo можно так же передать инпутом из profile-page (подумать)
  public user: IUser | null = this.authService.user$.value;

  constructor(
    public forecastService: ForecastService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  onSettings() {
    this.router.navigateByUrl('/settings');
  }
}
