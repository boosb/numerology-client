import { Component, Input } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';

@Component({
  selector: 'app-stepper-view-one',
  standalone: true,
  imports: [
    StepperItemComponent
  ],
  templateUrl: './stepper-view-one.component.html',
  styleUrl: './stepper-view-one.component.scss'
})
export class StepperViewOneComponent {
  @Input() title: string = '';
}
