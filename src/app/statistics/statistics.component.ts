import { Component, OnInit } from '@angular/core';
import { CURRENCIES, DEFAULT_CURRENCY_ONE, DEFAULT_CURRENCY_TWO } from '../constants/currencies';

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
    const currentDate: Date = new Date();
    const lastWeekDate: Date = new Date();
    lastWeekDate.setDate(lastWeekDate.getDate() - 7);
    this.timeFrames.push({label: "Last week", from: lastWeekDate, to: currentDate});

    const twoWeeksAgoDate: Date = new Date(lastWeekDate.getTime());
    twoWeeksAgoDate.setDate(twoWeeksAgoDate.getDate() - 7);
    this.timeFrames.push({label: "Last 2 weeks", from: twoWeeksAgoDate, to: currentDate});

    const monthAgoDate: Date = new Date();
    monthAgoDate.setMonth(monthAgoDate.getMonth() - 1);
    this.timeFrames.push({label: "Last month", from: monthAgoDate, to: currentDate});

    const sixMonthsAgoDate: Date = new Date();
    sixMonthsAgoDate.setMonth(sixMonthsAgoDate.getMonth() - 6);
    this.timeFrames.push({label: "Last 6 months", from: sixMonthsAgoDate, to: currentDate});

    const yearAgoDate: Date = new Date();
    yearAgoDate.setFullYear(yearAgoDate.getFullYear() - 1);
    this.timeFrames.push({label: "Last year", from: yearAgoDate, to: currentDate});

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

interface TimeFrame {
  label: string;
  from?: Date;
  to?: Date;
}