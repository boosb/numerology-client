import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-five',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-five.component.html',
  styleUrls: [
    './stepper-view-five.component.scss',
    '../../stepper.component.scss'
  ] 
})
export class StepperViewFiveComponent {
  iconConfig: IIconConfig = IconConfig;
}
