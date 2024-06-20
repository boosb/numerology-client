import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StepperProgressBarComponent } from './stepper-progress-bar/stepper-progress-bar.component';
import { StepperConfig } from './stepper.config';
import { StepperService } from '../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { IStepperConfigItem } from '../../interfaces/stepper-config-item.interface';
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StepperProgressBarComponent
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
    private cdRef: ChangeDetectorRef,
    public stepperService: StepperService,
    private authService: AuthService,
    private userService: UserService
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
    const currentUser = this.authService.user$.value;
    if(!currentUser) {

      // todo ну мб ошибку какую-нибудь выкинуть
      return;
    }

    // todo валидация на все шаги
    const saveObj = {
      ...currentUser, 
      ...this.stepperService.dataForSave
    };

    console.log(saveObj, ' >>> saveObj')

    this.userService.updateUser(saveObj).subscribe();
    this.stepperService.nextStep();
  }
}
