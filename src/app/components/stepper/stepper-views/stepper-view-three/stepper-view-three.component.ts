import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../../../services/erros.service';

@Component({
  selector: 'app-stepper-view-three',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './stepper-view-three.component.html',
  styleUrls: [
    './stepper-view-three.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewThreeComponent {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    time: new FormControl<Date|null>(null, [
      Validators.required
    ]),
  });

  get time() {
    return this.form.controls.time as FormControl;
  }

  constructor(
    public errorService: ErrorService,
    private stepperService: StepperService
  ) {}

  onTimeBirth() {
    const {time} = this.form.value;
    const {fieldForUpdate} = this.step;

    this.stepperService.dataForSave[fieldForUpdate] = time;
  }
}
