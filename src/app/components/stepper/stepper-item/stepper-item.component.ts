import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-item',
  standalone: true,
  imports: [],
  templateUrl: './stepper-item.component.html',
  styleUrl: './stepper-item.component.scss'
})
export class StepperItemComponent {
  // todo хорощо бы сделать "высоту" и "ширину" настраиваемыми параметрами
  @Input() text: string = '';

  @Input() icon: string = '';
}
