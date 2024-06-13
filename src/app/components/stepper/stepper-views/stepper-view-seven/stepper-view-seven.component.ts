import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { CommonModule } from '@angular/common';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-seven',
  standalone: true,
  imports: [
    CommonModule,
    StepperItemComponent
  ],
  templateUrl: './stepper-view-seven.component.html',
  styleUrls: [
    './stepper-view-seven.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewSevenComponent {
  iconConfig: IIconConfig = IconConfig;
  
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
