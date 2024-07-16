import { Component } from '@angular/core';
import { ImgService } from '../../services/img.service';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  constructor(
    public imgService: ImgService
  ) {}
}
