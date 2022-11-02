import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-panel',
  templateUrl: './exchange-rate-panel.component.html',
  styleUrls: ['./exchange-rate-panel.component.scss']
})
export class ExchangeRatePanelComponent implements OnInit {

  currencies: string[] = ["eur", "usd", "gbp", "rub", "jpy", "chf"];

  constructor() { }

  ngOnInit(): void {
  }

}
