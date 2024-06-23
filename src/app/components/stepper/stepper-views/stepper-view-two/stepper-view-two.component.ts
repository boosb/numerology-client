import { Component, OnInit } from '@angular/core';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../../../services/erros.service';

@Component({
  selector: 'app-stepper-view-two',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './stepper-view-two.component.html',
  styleUrls: [
    './stepper-view-two.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewTwoComponent implements OnInit {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    dateBirth: new FormControl<Date|null>(null, [
      Validators.required
    ]),
  });

  get dateBirth() {
    return this.form.controls.dateBirth as FormControl;
  }

  constructor(
    private stepperService: StepperService,
    public errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.errorService.setErrors(this.dateBirth.errors);
  }

  onDateBirth() {
    const dateBirth = this.form.value.dateBirth;
    const { fieldForUpdate } = this.step;

    this.errorService.setErrors(this.dateBirth.errors);
    this.stepperService.dataForSave[fieldForUpdate] = dateBirth;
  }
}