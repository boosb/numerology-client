import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StepperProgressBarComponent } from './stepper-progress-bar/stepper-progress-bar.component';
import { StepperConfig } from './stepper.config';
import { StepperService } from '../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { IStepperConfigItem } from '../../interfaces/stepper-config-item.interface';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { ForecastService, forecastConst } from '../../services/forecast.service';
import { ImgService } from '../../services/img.service';
import { ErrorComponent } from '../error/error.component';

// todo надо добавить валидацию на каждый шаг!!! 1) Если данные вопроса уже есть в БД (для обязытельных), то даем возможность пропустить
// 2) убрать кнопку продолжить у всех шагов с "итемами" и делать переход по клику на итем
// 3) необязательные вопросы можем пропускать всегда

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    StepperProgressBarComponent,
    ErrorComponent
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('view', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  private stepIdSubs: Subscription;

  private stepId: number;

  public step: IStepperConfigItem;

  constructor(
    public stepperService: StepperService,
    public imgService: ImgService,
    private cdRef: ChangeDetectorRef,
    private authService: AuthService,
    private userService: UserService,
    private forecastService: ForecastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stepIdSubs = this.stepperService.stepId$.subscribe(stepId => {
      this.stepId = stepId;
      this.step = this.stepperService.getCurrentStep();
      this.changeView(stepId);
    });
  }

  ngAfterViewInit(): void {
    this.changeView(this.stepId);
  }

  ngOnDestroy(): void {
    this.stepIdSubs.unsubscribe();
  }

  _getCreatedComponent(stepId: number) {
    const step = StepperConfig[stepId];
    return this.viewRef.createComponent(step.component);
  }

  changeView(stepId: number) {
    if(!this.viewRef) {
      return;
    }
    this.viewRef.clear();
    const componentRef = this._getCreatedComponent(stepId);    
    this.cdRef.detectChanges(); 
  }

  onNextStep() {
    this.stepperService.nextStep(null);
  }

  buyForecast() {
    // todo пока что покупаем только "ежедневный" прогноз
    this.forecastService.buyForecast(forecastConst.DAILY);
    this.router.navigateByUrl('/forecast');
  }
}
