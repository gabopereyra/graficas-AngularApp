import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { GraficasService } from '../../services/graficas-service.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.css']
})
export class DonaHttpComponent implements OnInit {
  public existeData : boolean = false;
  
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

  public colores : Color[] = [
        '#4641F2', 
        '#4470FC',
        '#4A98E5',
        '#44D1FC',
        '#41F2ED'
  ]

  public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private graficaService : GraficasService
  ) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedesSociales().subscribe(
    //   data => {
    //     this.existeData = true;

    //     const labels = Object.keys(data);
    //     const dataset = Object.values(data);

    //     this.doughnutChartData.labels = labels;
    //     this.doughnutChartData.datasets = [{data: dataset, backgroundColor: this.colores}];

    //     console.log(this.doughnutChartData)
    //   }
    // );

    this.graficaService.getUsuariosRedesSocialesDonaData()
    .subscribe( ({ labels, values }) => {
      this.existeData = true;
      
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets = [{data: values, backgroundColor: this.colores}];
    })
  }

}
