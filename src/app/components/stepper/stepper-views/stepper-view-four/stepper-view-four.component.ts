import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../../../services/erros.service';

@Component({
  selector: 'app-stepper-view-four',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    CommonModule
  ],
  templateUrl: './stepper-view-four.component.html',
  styleUrls: [
    './stepper-view-four.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewFourComponent {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    placeBirth: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ]),
  });

  get placeBirth() {
    return this.form.controls.placeBirth as FormControl;
  }
  
  constructor(
    public errorService: ErrorService,
    private stepperService: StepperService
  ) {}

  onPlaceBirthChange() {
    const {placeBirth} = this.form.value;
    const {fieldForUpdate} = this.step;

    this.stepperService.dataForSave[fieldForUpdate] = placeBirth;
  }
}
