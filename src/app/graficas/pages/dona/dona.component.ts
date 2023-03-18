import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#61E81E', '#4DAAE8', '#E89A2A'] },
    ]
  };

  // public doughnutChartData: ChartData<'doughnut'> = {
  //   labels: this.doughnutChartLabels,
  //   datasets: [
  //     { data: [ 350, 450, 100 ], backgroundColor: ['#61E81E', '#4DAAE8', '#E89A2A'] },
  //     { data: [ 50, 150, 120 ] }
  //   ]
  // };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
