import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { ExchangeRate } from '../services/exchange-rate-service/exchange-rate.model';

@Component({
  selector: 'app-rate-chart',
  templateUrl: './rate-chart.component.html',
  styleUrls: ['./rate-chart.component.scss']
})
export class RateChartComponent implements OnInit {

  @Input()
  exchangeRates: ExchangeRate[] = [];
  
  data: any;

  options = {
    plugins: {
      legend: {
        display: false,
        labels: {
          color: '#ebedef'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      },
      y: {
        ticks: {
          color: '#ebedef'
        },
        grid: {
          color: 'rgba(255,255,255,0.2)'
        }
      }
    }
  };

  constructor() { }
  
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.exchangeRates);
    this.data = {
      labels: this.exchangeRates.map(r => moment(r.creat).format("YYYY.MM.DD")),
      datasets: [
        {
          label: 'Exchange rate',
          data: this.exchangeRates.map(r => r.exchangeRate),
          fill: false,
          borderColor: '#fa8528',
          tension: 0
        }
      ]
    }
  }


}
