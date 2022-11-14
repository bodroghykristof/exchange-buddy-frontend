import { Component, OnInit } from '@angular/core';
import { CURRENCIES, DEFAULT_CURRENCY_ONE, DEFAULT_CURRENCY_TWO } from '../constants/currencies';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  currencies: StatCurrency[];
  currencyOne: StatCurrency;
  currencyTwo: StatCurrency;

  constructor() { 
    this.currencies = CURRENCIES.map(c => ({name: c}));
    this.currencyOne = {name: DEFAULT_CURRENCY_ONE};
    this.currencyTwo = {name: DEFAULT_CURRENCY_TWO};
  }
  
  ngOnInit(): void {
  }

  onCurrencyChange(event: any): void {
    console.log(this.currencyOne + ", " + this.currencyTwo);
  }

}

interface StatCurrency {
  name: string;
}
