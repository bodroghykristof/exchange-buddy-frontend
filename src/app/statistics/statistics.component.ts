import { Component, OnInit } from '@angular/core';
import { CURRENCIES, DEFAULT_CURRENCY_ONE, DEFAULT_CURRENCY_TWO } from '../constants/currencies';
import { getTimeFrames } from '../constants/timeframes';
import { TimeFrame } from '../model/timeframe';
import { ExchangeRate } from '../services/exchange-rate-service/exchange-rate.model';
import { ExchangeRateService } from '../services/exchange-rate-service/exchange-rate.service';

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

  exchangeRates: ExchangeRate[] = [];

  constructor(private readonly exchangeRateService: ExchangeRateService) { 
    this.currencies = CURRENCIES;
    this.currencyOne = DEFAULT_CURRENCY_ONE;
    this.currencyTwo = DEFAULT_CURRENCY_TWO;
  }

  ngOnInit(): void {
    this.timeFrames = getTimeFrames();
    this.timeFrame = this.timeFrames[0];
    this.loadRateData();
  }

  validateSelection(order: number): void {
    if (this.currencyOne === this.currencyTwo) {
      if (order === 1) {
        this.currencyTwo = undefined;
      } else {
        this.currencyOne = undefined;
      }
    }
    this.loadRateData();
  }

  onTimeFrameChange() {
    this.loadRateData();
  }

  loadRateData() : void {
    if (this.currencyOne && this.currencyTwo && this.timeFrame) {
      this.exchangeRateService.getExchangeRateHistory(this.currencyOne, this.currencyTwo, this.timeFrame.from, this.timeFrame?.to)
          .subscribe((data: ExchangeRate[]) => this.exchangeRates = data)
    }
  }

  selectionValid() : boolean {
    return this.currencyOne !== undefined && this.currencyTwo !== undefined;
  }

}