import { Component } from '@angular/core';
import { StepperComponent } from '../../components/stepper/stepper.component';

@Component({
  selector: 'app-setting-page',
  standalone: true,
  imports: [StepperComponent],
  templateUrl: './setting-page.component.html',
  styleUrl: './setting-page.component.scss'
})
export class SettingPageComponent {

}
