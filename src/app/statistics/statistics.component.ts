import { Component } from '@angular/core';
import { CURRENCIES, DEFAULT_CURRENCY_ONE, DEFAULT_CURRENCY_TWO } from '../constants/currencies';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  currencies: string[];
  currencyOne?: string;
  currencyTwo?: string;

  constructor() { 
    this.currencies = CURRENCIES;
    this.currencyOne = DEFAULT_CURRENCY_ONE;
    this.currencyTwo = DEFAULT_CURRENCY_TWO;
  }

  validateSelection(order: number): void {
    if (this.currencyOne === this.currencyTwo) {
      if (order === 1) {
        this.currencyTwo = undefined;
      } else {
        this.currencyOne = undefined;
      }
    }
  }

}
