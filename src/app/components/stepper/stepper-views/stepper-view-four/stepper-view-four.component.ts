import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
export class StepperViewFourComponent implements OnInit {
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
    private stepperService: StepperService
  ) {}

  ngOnInit(): void {
    console.log(this.placeBirth.errors , ' >>> ERR----2')
    this._setErrors();
  }

  onPlaceBirthChange() {
    const {placeBirth} = this.form.value;
    const {fieldForUpdate} = this.step;

    this._setErrors();
    this.stepperService.dataForSave[fieldForUpdate] = placeBirth;
  }

  _setErrors() {
    this.stepperService.errors = this.placeBirth.errors;
  }
}
