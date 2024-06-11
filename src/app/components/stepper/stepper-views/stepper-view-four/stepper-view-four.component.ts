import { Component } from '@angular/core';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper-view-four',
  standalone: true,
  imports: [],
  templateUrl: './stepper-view-four.component.html',
  styleUrls: [
    './stepper-view-four.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewFourComponent {
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
