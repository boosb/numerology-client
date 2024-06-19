import { Component } from '@angular/core';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepper-view-two',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './stepper-view-two.component.html',
  styleUrls: [
    './stepper-view-two.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewTwoComponent {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    dateBirth: new FormControl(),
  });

  get dateBirth() {
    return this.form.controls.dateBirth as FormControl;
  }

  constructor(
    private stepperService: StepperService
  ) {}

  onDateBirth() {
    const dateBirth = new Date(this.form.value.dateBirth);
    const {fieldForUpdate} = this.step;
    this.stepperService.dataForSave[fieldForUpdate] = dateBirth;
  }
}