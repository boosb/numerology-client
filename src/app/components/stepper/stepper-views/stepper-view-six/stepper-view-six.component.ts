import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';
import { StepperViewItemComponent } from '../stepper-view-item/stepper-view-item.component';

@Component({
  selector: 'app-stepper-view-six',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-six.component.html',
  styleUrls: [
    './stepper-view-six.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewSixComponent extends StepperViewItemComponent {
  iconConfig: IIconConfig = IconConfig;
}
