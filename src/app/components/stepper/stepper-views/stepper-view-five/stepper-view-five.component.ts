import { Component } from '@angular/core';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper-view-five',
  standalone: true,
  imports: [
    CommonModule,
    StepperItemComponent
  ],
  templateUrl: './stepper-view-five.component.html',
  styleUrls: [
    './stepper-view-five.component.scss',
    '../../stepper.component.scss'
  ] 
})
export class StepperViewFiveComponent {
  iconConfig: IIconConfig = IconConfig;
  
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
