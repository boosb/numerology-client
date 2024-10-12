import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-eight',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-eight.component.html',
  styleUrls: [
    './stepper-view-eight.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewEightComponent {
  iconConfig: IIconConfig = IconConfig;
}
