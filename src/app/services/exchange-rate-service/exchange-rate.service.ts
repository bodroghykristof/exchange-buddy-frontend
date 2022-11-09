import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BASE_URL, EXCHANGE_RATE_ENDPOINT, EXCHANGE_RATE_SSE_ENDPOINT } from 'src/app/rest-api/endpoints';
import { QueryParamBuilder } from 'src/app/rest-api/queryparam-builder';
import { BASE_CURRENCY, CURRENCIES, CURRENCY_SEPARATOR_CHAR } from 'src/app/rest-api/queryparam-constans';
import { SseService } from '../sse/sse.service';
import { ExchangeRate } from './exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private readonly http: HttpClient, private readonly sseService: SseService) { }

  getExchangeRatesByBase(base: string, currencies: string[]): Observable<ExchangeRate[]> {
    if (!base || currencies.length === 0) {
      throw "A base currency and at least one reference currency must be specified";
    }

    let queryParams: string = new QueryParamBuilder()
      .addParam(BASE_CURRENCY, base)
      .addParam(CURRENCIES, currencies.join(CURRENCY_SEPARATOR_CHAR))
      .build();

    return this.http.get<ExchangeRate[]>(BASE_URL + EXCHANGE_RATE_ENDPOINT + queryParams);

  }

  // we return an empty list in case of errors
  getLiveExchangeRateUpdate(): Observable<ExchangeRate[]> {
    return this.sseService.getServerSentEvent(BASE_URL + EXCHANGE_RATE_SSE_ENDPOINT)
      .pipe(map(event => {
        if (event.error) return [];
        return event.data ? <ExchangeRate[]> JSON.parse(event.data.data) : [];
      }));
  }

}
