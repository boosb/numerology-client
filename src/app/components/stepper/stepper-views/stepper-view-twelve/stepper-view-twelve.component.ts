import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { StepperViewItemComponent } from '../stepper-view-item/stepper-view-item.component';

@Component({
  selector: 'app-stepper-view-twelve',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-twelve.component.html',
  styleUrls: [
    './stepper-view-twelve.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewTwelveComponent extends StepperViewItemComponent {

}
