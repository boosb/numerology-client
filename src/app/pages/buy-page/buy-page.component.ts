import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BuyPageItemComponent } from './buy-page-item/buy-page-item.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BuyPageItemComponent
  ],
  templateUrl: './buy-page.component.html',
  styleUrl: './buy-page.component.scss'
})
export class BuyPageComponent {
  convertedCoins: number = 0;

  form = new FormGroup({
    coins: new FormControl<string>('0', []),
  });

  get coins() {
    return this.form.controls.coins as FormControl;
  }

  onChangeCoins() {
    const { coins } = this.form.value;

    if(!coins) {
      return;
    }

    this.form.setValue({
      // убираем все символы кроме цифр и нули из начала
      coins: coins.replace(/[^+\d]|^0+/g, ''),
    });

    this.convertedCoins = Number(this.form.value.coins) * 2.5;
  }
}
