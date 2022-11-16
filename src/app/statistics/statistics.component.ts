import { Component, OnInit } from '@angular/core';
import { CURRENCIES, DEFAULT_CURRENCY_ONE, DEFAULT_CURRENCY_TWO } from '../constants/currencies';
import { getTimeFrames } from '../constants/timeframes';
import { TimeFrame } from '../model/timeframe';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  currencies: string[];
  currencyOne?: string;
  currencyTwo?: string;

  timeFrames: TimeFrame[] = [];
  timeFrame?: TimeFrame;

  constructor() { 
    this.currencies = CURRENCIES;
    this.currencyOne = DEFAULT_CURRENCY_ONE;
    this.currencyTwo = DEFAULT_CURRENCY_TWO;
  }

  ngOnInit(): void {
    this.timeFrames = getTimeFrames();
    this.timeFrame = this.timeFrames[0];
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

  onTimeFrameChange() {
    console.log(this.timeFrame);
  }

}