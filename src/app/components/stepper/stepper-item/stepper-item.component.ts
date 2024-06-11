import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface ISize {
  width: number;
  height: number;
}

@Component({
  selector: 'app-stepper-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-item.component.html',
  styleUrl: './stepper-item.component.scss'
})
export class StepperItemComponent {
  @Input() text: string = '';

  @Input() icon: string = '';

  @Input() size: ISize = {
    'width': 312,
    'height': 312
  };

  get style() {
    return {
      'width': `${this.size.width}px`, 
      'height': `${this.size.height}px`
    };
  }
}
