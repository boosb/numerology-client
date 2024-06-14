import { Component } from '@angular/core';
import { DailyForecastItemComponent } from '../../components/daily-forecast-item/daily-forecast-item.component';

@Component({
  selector: 'app-daily-forecast-page',
  standalone: true,
  imports: [DailyForecastItemComponent],
  templateUrl: './daily-forecast-page.component.html',
  styleUrl: './daily-forecast-page.component.scss'
})
export class DailyForecastPageComponent {

}
