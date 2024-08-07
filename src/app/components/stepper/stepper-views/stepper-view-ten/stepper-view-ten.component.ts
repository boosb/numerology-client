import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-ten',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-ten.component.html',
  styleUrls: [
    './stepper-view-ten.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewTenComponent {
  iconConfig: IIconConfig = IconConfig;
}
