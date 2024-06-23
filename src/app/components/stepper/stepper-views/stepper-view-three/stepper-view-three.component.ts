import { Component, OnInit } from '@angular/core';
import { CustomSelectComponent } from '../../../custom-select/custom-select.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';
import { ErrorService } from '../../../../services/erros.service';
import { ValidateExistDate } from '../../../../helpers/exist-data.validate';

@Component({
  selector: 'app-stepper-view-three',
  standalone: true,
  imports: [CustomSelectComponent, ReactiveFormsModule],
  templateUrl: './stepper-view-three.component.html',
  styleUrls: [
    './stepper-view-three.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewThreeComponent implements OnInit {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    time: new FormControl<Date|null>(null, [

      // todo надо поменять (поле НЕ обязательное, но нельзя "продолжить" без данных, можно пропустить)
      Validators.required,
      ValidateExistDate
    ]),
  });

  get time() {
    return this.form.controls.time as FormControl;
  }

  constructor(
    private stepperService: StepperService,
    public errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.errorService.setErrors(this.time.errors);
  }

  onTimeBirth() {
    const {time} = this.form.value;
    const {fieldForUpdate} = this.step;

    this.errorService.setErrors(this.time.errors);
    this.stepperService.dataForSave[fieldForUpdate] = time;
  }
}
