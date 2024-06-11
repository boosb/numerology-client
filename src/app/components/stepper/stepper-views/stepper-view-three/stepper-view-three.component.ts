import { Component } from '@angular/core';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { CustomSelectComponent } from '../../../custom-select/custom-select.component';

@Component({
  selector: 'app-stepper-view-three',
  standalone: true,
  imports: [CustomSelectComponent],
  templateUrl: './stepper-view-three.component.html',
  styleUrls: [
    './stepper-view-three.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewThreeComponent {
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
