import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StepperItemComponent } from './stepper-item/stepper-item.component';
import { StepperProgressBarComponent } from './stepper-progress-bar/stepper-progress-bar.component';
import { StepperViewOneComponent } from './stepper-views/stepper-view-one/stepper-view-one.component';
import { StepperViewTwoComponent } from './stepper-views/stepper-view-two/stepper-view-two.component';
import { StepperConfig } from './stepper.config';
import { StepperService } from '../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { IStepperConfigItem } from '../../interfaces/stepper-config-item.interface';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    //StepperItemComponent,
    CommonModule,
    StepperProgressBarComponent,
    //StepperViewOneComponent,
    //StepperViewTwoComponent
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('view', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;

  private stepId: number;

  public step: IStepperConfigItem;

  constructor(
    private cdRef: ChangeDetectorRef,
    public stepperService: StepperService
  ) {}

  ngOnInit(): void {
    this.stepperService.stepId$.subscribe(stepId => {
      this.stepId = stepId;
      this.step = this.stepperService.getCurrentStep();
      this.changeView(stepId);
    });
  }

  ngAfterViewInit(): void {
    this.changeView(this.stepId);
  }

  ngOnDestroy(): void {
    this.stepperService.stepId$.unsubscribe();
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
    //this._loadDataComponent(componentRef); // todo пока непонятно нужен ли мне, посмотрим
    
    this.cdRef.detectChanges(); 
  }
}
