import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-fourteen',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-fourteen.component.html',
  styleUrls: [
    '../../stepper.component.scss',
    './stepper-view-fourteen.component.scss'
  ]
})
export class StepperViewFourteenComponent {
  iconConfig: IIconConfig = IconConfig;
}
