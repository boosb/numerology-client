import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';
import { StepperViewItemComponent } from '../stepper-view-item/stepper-view-item.component';

@Component({
  selector: 'app-stepper-view-fifteen',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-fifteen.component.html',
  styleUrls: [
    '../../stepper.component.scss',
    './stepper-view-fifteen.component.scss'
  ]
})
export class StepperViewFifteenComponent extends StepperViewItemComponent {
  iconConfig: IIconConfig = IconConfig;
}
