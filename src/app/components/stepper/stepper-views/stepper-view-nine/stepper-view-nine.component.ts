import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';
import { StepperViewItemComponent } from '../stepper-view-item/stepper-view-item.component';

@Component({
  selector: 'app-stepper-view-nine',
  standalone: true,
  imports: [StepperItemComponent],
  templateUrl: './stepper-view-nine.component.html',
  styleUrls: [
    './stepper-view-nine.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewNineComponent extends StepperViewItemComponent {
  iconConfig: IIconConfig = IconConfig;
}