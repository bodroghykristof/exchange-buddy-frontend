import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from '../services/exchange-rate-service/exchange-rate.service';

@Component({
  selector: 'app-exchange-rate-panel',
  templateUrl: './exchange-rate-panel.component.html',
  styleUrls: ['./exchange-rate-panel.component.scss']
})
export class ExchangeRatePanelComponent implements OnInit {

  currencies: string[] = ["eur", "usd", "gbp", "rub", "jpy", "chf"];

  constructor(private readonly exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
  }

}
