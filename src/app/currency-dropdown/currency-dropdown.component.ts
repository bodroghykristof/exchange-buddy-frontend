import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CURRENCIES } from '../constants/currencies';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss']
})
export class CurrencyDropdownComponent {

  currencies: string[];
  
  @Input() currency?: string;
  @Output() currencyChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { 
    this.currencies = CURRENCIES;
    console.log(this.currency);
   }

   changeSelection(): void {
    this.currencyChange.emit(this.currency);
    this.onChange.emit();
   }

}
