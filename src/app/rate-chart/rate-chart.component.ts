import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-chart',
  templateUrl: './rate-chart.component.html',
  styleUrls: ['./rate-chart.component.scss']
})
export class RateChartComponent implements OnInit {

  data: any = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#fa8528',
        tension: 0
      }
    ]
  };

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

}
