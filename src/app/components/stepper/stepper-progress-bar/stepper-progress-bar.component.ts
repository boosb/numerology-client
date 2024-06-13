import { Component, Input } from '@angular/core';
import { StepperService } from '../../../services/stepper.service';
import { IIconConfig } from '../../../interfaces/icon-config.interface';
import { IconConfig } from '../icon.config';
import { IStepperConfigItem } from '../../../interfaces/stepper-config-item.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper-progress-bar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './stepper-progress-bar.component.html',
  styleUrl: './stepper-progress-bar.component.scss'
})
export class StepperProgressBarComponent {
  
  @Input() public step: IStepperConfigItem;

  public iconConfig: IIconConfig = IconConfig;

  public totalCountStep: number = this.stepperService.getTotalCountStep();

  constructor(
    public stepperService: StepperService
  ) {}

  getProgressBarWidthVH() {
    return `${ 675 / this.totalCountStep * this.step.id }px`; // todo мб перенести 675 куда-нибудь в константы
  }
}
