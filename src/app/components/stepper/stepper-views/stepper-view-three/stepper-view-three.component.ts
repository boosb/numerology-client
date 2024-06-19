import { Component } from '@angular/core';
import { CustomSelectComponent } from '../../../custom-select/custom-select.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperService } from '../../../../services/stepper.service';

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
export class StepperViewThreeComponent {
  private step: IStepperConfigItem = this.stepperService.getCurrentStep();

  form = new FormGroup({
    time: new FormControl(),
  });

  get time() {
    return this.form.controls.time as FormControl;
  }

  constructor(
    private stepperService: StepperService
  ) {}

  onTimeBirth() {
    const {time} = this.form.value;
    const {fieldForUpdate} = this.step;
    this.stepperService.dataForSave[fieldForUpdate] = time;
  }
}
