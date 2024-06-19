import { Component } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { IconConfig } from '../../icon.config';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { CommonModule } from '@angular/common';
import { StepperService } from '../../../../services/stepper.service';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { StepperViewItemComponent } from '../stepper-view-item/stepper-view-item.component';

@Component({
  selector: 'app-stepper-view-one',
  standalone: true,
  imports: [
    CommonModule,
    StepperItemComponent
  ],
  templateUrl: './stepper-view-one.component.html',
  styleUrls: [
    './stepper-view-one.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewOneComponent extends StepperViewItemComponent {
  iconConfig: IIconConfig = IconConfig;
}