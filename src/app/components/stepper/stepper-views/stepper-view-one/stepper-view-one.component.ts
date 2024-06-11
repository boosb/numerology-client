import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IconConfig } from '../../icon.config';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { StepperService } from '../../../../services/stepper.service';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';

@Component({
  selector: 'app-stepper-view-one',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-one.component.html',
  styleUrls: [
    './stepper-view-one.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewOneComponent {
  iconConfig: IIconConfig = IconConfig;

  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
