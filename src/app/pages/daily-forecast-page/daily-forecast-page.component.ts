import { Component, OnDestroy, OnInit } from '@angular/core';
import { DailyForecastItemComponent } from '../../components/daily-forecast-item/daily-forecast-item.component';
import { CommonModule } from '@angular/common';
import { ForecastService } from '../../services/forecast.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-daily-forecast-page',
  standalone: true,
  imports: [CommonModule, DailyForecastItemComponent],
  templateUrl: './daily-forecast-page.component.html',
  styleUrl: './daily-forecast-page.component.scss'
})
export class DailyForecastPageComponent implements OnInit, OnDestroy {

  // todo можно так же передать инпутом из profile-page (подумать)
  public user: IUser | null = this.authService.user$.value;

  constructor(
    public forecastService: ForecastService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.user, ' >>> USER-TEST-1')
    this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    // todo неправильно оформлена отписка, исправить!
    //this.authService.user$.unsubscribe();
  }

  onSettings() {
    this.router.navigateByUrl('/settings');
  }
}
