import { Component, OnInit } from '@angular/core';
import { StepperItemComponent } from '../../stepper-item/stepper-item.component';
import { CommonModule } from '@angular/common';
import { IIconConfig } from '../../../../interfaces/icon-config.interface';
import { IStepperConfigItem } from '../../../../interfaces/stepper-config-item.interface';
import { IconConfig } from '../../icon.config';
import { StepperService } from '../../../../services/stepper.service';

@Component({
  selector: 'app-stepper-view-nine',
  standalone: true,
  imports: [
    CommonModule,
    StepperItemComponent
  ],
  templateUrl: './stepper-view-nine.component.html',
  styleUrls: [
    './stepper-view-nine.component.scss',
    '../../stepper.component.scss'
  ]
})
export class StepperViewNineComponent {
  iconConfig: IIconConfig = IconConfig;
  
  step: IStepperConfigItem = this.stepperService.getCurrentStep();

  constructor(
    private stepperService: StepperService
  ) {}
}
