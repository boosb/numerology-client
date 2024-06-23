import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { ErrorService } from '../../../../services/erros.service';
import { CommonModule } from '@angular/common';

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
export class StepperViewFourComponent implements OnInit {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    placeBirth: new FormControl<string>('', [
      Validators.minLength(4),
      Validators.maxLength(30),
    ]),
  });

  get placeBirth() {
    return this.form.controls.placeBirth as FormControl;
  }
  
  constructor(
    private stepperService: StepperService,
    public errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.errorService.setErrors(this.placeBirth.errors);
  }

  onPlaceBirthChange() {
    const {placeBirth} = this.form.value;
    const {fieldForUpdate} = this.step;

    this.errorService.setErrors(this.placeBirth.errors);
    this.stepperService.dataForSave[fieldForUpdate] = placeBirth;
  }
}
