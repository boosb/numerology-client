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

  onConvertCoins() {
    //this.coins = 
  }

  onChangeCoins() {
    const { coins } = this.form.value;

    if(!coins) {
      return;
    }

    const test = coins.replace(/[^+\d]/g, '');

    
  //  console.log(regex,' >>> regex')
    this.convertedCoins = coins * 2.5;
  }

  test() {
    const regex = /^[A-Za-z0-9 _-]+$/;
  }
}
