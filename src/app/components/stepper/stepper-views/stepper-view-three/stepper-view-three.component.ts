import { Component } from '@angular/core';
import { CustomSelectComponent } from '../../../custom-select/custom-select.component';

@Component({
  selector: 'app-stepper-view-three',
  standalone: true,
  imports: [CustomSelectComponent],
  templateUrl: './stepper-view-three.component.html',
  styleUrls: [
    './stepper-view-three.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewThreeComponent {}
