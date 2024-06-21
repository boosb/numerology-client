import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper-view-item',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-item.component.html',
  styleUrl: './stepper-view-item.component.scss'
})
export class StepperViewItemComponent {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep(); // todo как буд-то надо удалить, но пока не рискнул

  constructor(
    private stepperService: StepperService
  ) {}

  setTest(itemText: string) {
    this.stepperService.nextStep(itemText);
  }
}
