import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { IconConfig } from '../../icon.config';
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper-view-six',
  standalone: true,
  imports: [
    CommonModule,
    StepperItemComponent
  ],
  templateUrl: './stepper-view-six.component.html',
  styleUrls: [
    './stepper-view-six.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewSixComponent {
  iconConfig: IIconConfig = IconConfig;
  
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
