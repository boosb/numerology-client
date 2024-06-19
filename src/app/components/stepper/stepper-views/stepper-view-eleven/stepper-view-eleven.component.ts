import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { StepperViewItemComponent } from '../stepper-view-item/stepper-view-item.component';

@Component({
  selector: 'app-stepper-view-eleven',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-eleven.component.html',
  styleUrls: [
    '../../stepper.component.scss',
    './stepper-view-eleven.component.scss'
  ]
})
export class StepperViewElevenComponent extends StepperViewItemComponent {

}
