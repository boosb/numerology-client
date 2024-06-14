import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-forecast-item',
  standalone: true,
  imports: [],
  templateUrl: './daily-forecast-item.component.html',
  styleUrl: './daily-forecast-item.component.scss'
})
export class DailyForecastItemComponent {
  @Input() title: string;

  @Input() value: string;
}
