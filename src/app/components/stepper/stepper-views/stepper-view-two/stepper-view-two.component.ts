import { Component } from '@angular/core';
import { CustomSelectComponent } from '../../../custom-select/custom-select.component';
import { StepperService } from '../../../../services/stepper.service';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';

@Component({
  selector: 'app-stepper-view-two',
  standalone: true,
  imports: [CustomSelectComponent],
  templateUrl: './stepper-view-two.component.html',
  styleUrls: [
    './stepper-view-two.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewTwoComponent {
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
