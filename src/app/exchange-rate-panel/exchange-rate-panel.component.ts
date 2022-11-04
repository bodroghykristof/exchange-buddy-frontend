import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from '../services/exchange-rate-service/exchange-rate.model';
import { ExchangeRateService } from '../services/exchange-rate-service/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate-panel',
  templateUrl: './exchange-rate-panel.component.html',
  styleUrls: ['./exchange-rate-panel.component.scss']
})
export class ExchangeRatePanelComponent implements OnInit {

  baseCurrency: string = "huf";
  currencies: string[] = ["eur", "usd", "gbp", "rub", "jpy", "chf"];
  exchangeRates: ExchangeRate[] = [];

  constructor(private readonly exchangeRateService: ExchangeRateService) {
    this.exchangeRates = this.currencies.map(c => ({currencyOne: c, currencyTwo: this.baseCurrency}));
  }

  ngOnInit(): void {
    this.exchangeRateService.getExchangeRatesByBase("huf", this.currencies)
                            .subscribe((data: ExchangeRate[]) => this.exchangeRates =  data);
  }

}
