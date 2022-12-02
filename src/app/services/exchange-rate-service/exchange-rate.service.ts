import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { dateFormat } from 'src/app/commons/date-util';
import { BASE_URL, EXCHANGE_RATE_ENDPOINT, EXCHANGE_RATE_HISTORY_ENDPOINT, EXCHANGE_RATE_SSE_ENDPOINT } from 'src/app/rest-api/endpoints';
import { QueryParamBuilder } from 'src/app/rest-api/queryparam-builder';
import { BASE_CURRENCY, CURRENCIES_QUERY_STRING_KEY, CURRENCY_ONE, CURRENCY_SEPARATOR_CHAR, CURRENCY_TWO, FROM, TO, URL_DATE_FORMAT } from 'src/app/rest-api/queryparam-constans';
import { SseService } from '../sse-service/sse.service';
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
      .addParam(CURRENCIES_QUERY_STRING_KEY, currencies.join(CURRENCY_SEPARATOR_CHAR))
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

  getExchangeRateHistory(currencyOne: string, currencyTwo: string, from: Date, to: Date): Observable<ExchangeRate[]> {
    if (!currencyOne || !currencyOne || !from || !to) {
      throw "Some mandatory parameters are not defined";
    } else if (from.getTime() > to.getTime()) {
      throw "Time 'from' must not be later than 'to'";
    }

    let queryParams: string = new QueryParamBuilder()
      .addParam(CURRENCY_ONE, currencyOne)
      .addParam(CURRENCY_TWO, currencyTwo)
      .addParam(FROM, dateFormat(from, URL_DATE_FORMAT))
      .addParam(TO, dateFormat(to, URL_DATE_FORMAT))
      .build();


      console.log(BASE_URL + EXCHANGE_RATE_HISTORY_ENDPOINT + queryParams)

    return this.http.get<ExchangeRate[]>(BASE_URL + EXCHANGE_RATE_HISTORY_ENDPOINT + queryParams);

  }

}
