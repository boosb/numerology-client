import { Component } from '@angular/core';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StepperService } from '../../../../services/stepper.service';
import { CommonModule } from '@angular/common';
import { ErrorService } from '../../../../services/erros.service';

@Component({
  selector: 'app-stepper-view-sixteen',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './stepper-view-sixteen.component.html',
  styleUrls: [
    '../../stepper.component.scss',
    './stepper-view-sixteen.component.scss'
  ]
})
export class StepperViewSixteenComponent {
  // todo ваще 4 и 16 шаг похожи, мб оформить наследование по типу StepperViewItemComponent (мб можно подогнать сюда шаги 2 и 3)
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ]),
  });

  get name() {
    return this.form.controls.name as FormControl;
  }

  constructor(
    public errorService: ErrorService,
    private stepperService: StepperService
  ) {}

  onNameChange() {
    const {name} = this.form.value;
    const {fieldForUpdate} = this.step;

    this.stepperService.dataForSave[fieldForUpdate] = name;
  }
}
