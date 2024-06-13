import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-seven',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-seven.component.html',
  styleUrls: [
    './stepper-view-seven.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewSevenComponent {
  iconConfig: IIconConfig = IconConfig;
}
