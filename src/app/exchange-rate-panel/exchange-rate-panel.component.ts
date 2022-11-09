import { Component, OnInit } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
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
    this.exchangeRates = this.currencies.map(c => ({ currencyOne: c, currencyTwo: this.baseCurrency }));
  }

  ngOnInit(): void {
    this.fetchInitialRateData();
    this.subscribeToContinuousUpdate();
  }

  private fetchInitialRateData(): void {
    let subscription: Subscription = this.exchangeRateService.getExchangeRatesByBase("huf", this.currencies)
      .subscribe({
        next: (data) => {
          this.exchangeRates = data;
          this.errorMessage = null;
          subscription.unsubscribe();
        },
        error: () => {
          this.errorMessage = "Exchange rates cannot be loaded, because our server is temporarily unavailable."
          subscription.unsubscribe();
        }
      });
  }

  private subscribeToContinuousUpdate(): void {
    this.exchangeRateService.getLiveExchangeRateUpdate()
      .subscribe({
        next: (event: MessageEvent<string>) => this.updateRates(event.data),
        error: (error) => console.log(error)
      });
  }

  private updateRates(eventString: string) {
    let newRates: ExchangeRate[] = JSON.parse(eventString);
    for (let exchangeRate of this.exchangeRates) {
      let newRate: ExchangeRate[] = newRates.filter(r => r.currencyOne === exchangeRate.currencyOne);
      if (newRate.length > 0 && newRate[0].exchangeRate) {
        exchangeRate.exchangeRate = newRate[0].exchangeRate;
      }
    }
  }

}
