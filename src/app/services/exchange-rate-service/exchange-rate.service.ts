import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private readonly http: HttpClient) { }

  getExchangeRatesByBase(base: string, currencies: string[]) {

  }

}
