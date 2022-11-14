import { Component, OnInit } from '@angular/core';
import { CURRENCIES, DEFAULT_CURRENCY_ONE } from '../constants/currencies';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  currencies: StatCurrency[];
  currencyOne: string;

  constructor() { 
    this.currencies = CURRENCIES.map(c => ({name: c}));
    this.currencyOne = DEFAULT_CURRENCY_ONE;
   }

  ngOnInit(): void {
  }

}

interface StatCurrency {
  name: string;
}
