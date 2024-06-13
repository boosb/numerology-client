import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { CommonModule } from '@angular/common';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper-view-eight',
  standalone: true,
  imports: [
    CommonModule,
    StepperItemComponent
  ],
  templateUrl: './stepper-view-eight.component.html',
  styleUrls: [
    './stepper-view-eight.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewEightComponent {
  iconConfig: IIconConfig = IconConfig;
  
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
