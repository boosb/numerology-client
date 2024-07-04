import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buy-page-item',
  standalone: true,
  imports: [],
  templateUrl: './buy-page-item.component.html',
  styleUrl: './buy-page-item.component.scss'
})
export class BuyPageItemComponent {
  @Input() localCoins: number;

  @Input() coins: number;
}
