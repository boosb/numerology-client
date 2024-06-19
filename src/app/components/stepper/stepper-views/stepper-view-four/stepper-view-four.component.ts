import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper-view-four',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './stepper-view-four.component.html',
  styleUrls: [
    './stepper-view-four.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewFourComponent {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    placeBirth: new FormControl(),
  });

  get placeBirth() {
    return this.form.controls.placeBirth as FormControl;
  }

  constructor(
    private stepperService: StepperService
  ) {}

  onPlaceBirthChange() {
    const {placeBirth} = this.form.value;
    const {fieldForUpdate} = this.step;
    this.stepperService.dataForSave[fieldForUpdate] = placeBirth;
  }
}
