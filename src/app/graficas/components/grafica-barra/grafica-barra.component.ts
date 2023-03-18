import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styleUrls: ['./grafica-barra.component.css']
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  @Input() barChartData!: ChartData<'bar'>;

  private _barChartOptionsX: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  private _barChartOptionsY: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    },
    indexAxis: 'y'
  };

  public barChartOptionsSelected: ChartConfiguration['options'] = this._barChartOptionsX;

  public barChartType: ChartType = 'bar';

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptionsSelected = this._barChartOptionsY;
    }
  }

}
