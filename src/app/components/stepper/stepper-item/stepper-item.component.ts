import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { StepperService } from '../../../services/stepper.service';

interface ISize {
  width: number;
  height: number;
  fontSize?: number;
}

@Component({
  selector: 'app-stepper-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-item.component.html',
  styleUrl: './stepper-item.component.scss'
})
export class StepperItemComponent {
  @Input() text: string;

  @Input() icon: string;

  @Input() size: ISize = {
    'width': 312,
    'height': 312,
    'fontSize': 20
  };

  @Output() itemClick = new EventEmitter();

  get style() {
    return {
      'width': `${this.size.width || 312}px`, 
      'height': `${this.size.height || 312}px`,
      'font-size': `${this.size.fontSize || 20}px`,
    };
  }

  constructor(
    private stepperService: StepperService
  ) {}

  public getText() {
    this.itemClick.emit(this.text);
  }

  @HostListener('itemClick', ['$event'])
  itemSelect(itemText: string) {
    this.stepperService.nextStep(itemText);
  }
}
