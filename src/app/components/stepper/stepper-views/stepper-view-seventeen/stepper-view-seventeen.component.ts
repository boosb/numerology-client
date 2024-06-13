import { Component } from '@angular/core';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IconConfig } from '../../icon.config';

@Component({
  selector: 'app-stepper-view-seventeen',
  standalone: true,
  imports: [],
  templateUrl: './stepper-view-seventeen.component.html',
  styleUrl: './stepper-view-seventeen.component.scss'
})
export class StepperViewSeventeenComponent {
  iconConfig: IIconConfig = IconConfig;
}
