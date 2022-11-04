import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  errorMessage: string | null = null;

  constructor(private readonly exchangeRateService: ExchangeRateService) {
    this.exchangeRates = this.currencies.map(c => ({currencyOne: c, currencyTwo: this.baseCurrency}));
  }

  ngOnInit(): void {
    let subscription: Subscription = this.exchangeRateService.getExchangeRatesByBase("huf", this.currencies)
    .subscribe({
      next: (data) => {
        this.exchangeRates = data;
        this.errorMessage = null;
        subscription.unsubscribe();
      },
      error: () => this.errorMessage = "Exchange rates cannot be loaded, because our server is temporarily unavailable."
    });
  }

}
