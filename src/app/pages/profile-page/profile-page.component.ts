import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { StepperService } from '../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { ForecastService, forecastConst } from '../../services/forecast.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  private userSubs: Subscription;

  public user: IUser | null = this.authService.currentUser;

  public forecastTypes = forecastConst;

  constructor(
    public authService: AuthService,
    private stepperService: StepperService,
    private forecastService: ForecastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSubs = this.authService.user$.subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSubs.unsubscribe();
  }

  onSettings() {
    this.stepperService.setStepId(1);
    this.router.navigateByUrl('/settings');
  }

  buyForecast(type: string) {
    if(!this.user) {
      return;
    }

    this.forecastService.buyForecast(this.user, type);
    this.router.navigateByUrl('/forecast');
  }
}
