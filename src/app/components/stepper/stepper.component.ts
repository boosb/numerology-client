import { Component } from '@angular/core';
import { StepperViewComponent } from './stepper-view/stepper-view.component';
import { StepperItemComponent } from './stepper-item/stepper-item.component';
import { StepperProgressBarComponent } from './stepper-progress-bar/stepper-progress-bar.component';
import { StepperViewOneComponent } from './stepper-views/stepper-view-one/stepper-view-one.component';
import { StepperViewTwoComponent } from './stepper-views/stepper-view-two/stepper-view-two.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [
    //StepperViewComponent,
    //StepperItemComponent,
    StepperProgressBarComponent,
    StepperViewOneComponent,
    StepperViewTwoComponent
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {

}
