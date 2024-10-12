import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StepperProgressBarComponent } from './stepper-progress-bar/stepper-progress-bar.component';
import { StepperConfig } from './stepper.config';
import { StepperService } from '../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { IStepperConfigItem } from '../../interfaces/stepper-config-item.interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForecastService, forecastConst } from '../../services/forecast.service';
import { ImgService } from '../../services/img.service';
import { ErrorComponent } from '../error/error.component';
import { ErrorService } from '../../services/erros.service';

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

  private componentRef: any;

  constructor(
    public stepperService: StepperService,
    public imgService: ImgService,
    private cdRef: ChangeDetectorRef,
    private forecastService: ForecastService,
    private router: Router,
    private errorService: ErrorService
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
    this.componentRef = this._getCreatedComponent(stepId);  
    this.cdRef.detectChanges(); 
  }

  onNextStep() {
    const { form } = this.componentRef.instance;
    this.errorService.enabledShowError(
      form.controls, 
      () => this.stepperService.nextStep(null)
    );
  }

  buyForecast() {
    // todo пока что покупаем только "ежедневный" прогноз (!)
    this.forecastService.buyForecast(forecastConst.DAILY);
    this.router.navigateByUrl('/forecast');
  }
}
