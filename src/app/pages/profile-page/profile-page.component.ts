import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { StepperService } from '../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { ForecastService, forecastConst } from '../../services/forecast.service';
import { Subscription } from 'rxjs';
import { ImgService } from '../../services/img.service';
import { IForecast } from '../../interfaces/forecast.interface';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  private userSubs: Subscription;

  private forecastSubs: Subscription;

  public user: IUser | null = this.authService.currentUser;

  public forecast: IForecast | null = this.forecastService.currentForecast;

  public forecastTypes = forecastConst;

  constructor(
    public authService: AuthService,
    public imgService: ImgService,
    private stepperService: StepperService,
    private forecastService: ForecastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => {
      this.user = user;
      if(user) {
        this.forecastService.getForecast(user.id).subscribe();
      }
    });
    this.forecastSubs = this.forecastService.forecast$.subscribe(forecast => this.forecast = forecast);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
    this.forecastSubs.unsubscribe();
  }

  onSettings() {
    this.stepperService.setStepId(1);
    this.router.navigateByUrl('/settings');
  }

  buyForecast(type: string) {
    this.forecastService.buyForecast(type);
    this.router.navigateByUrl('/forecast');
  }
}
