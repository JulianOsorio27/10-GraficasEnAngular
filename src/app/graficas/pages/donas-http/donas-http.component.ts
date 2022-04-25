import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-donas-http',
  templateUrl: './donas-http.component.html',
  styles: [
  ]
})
export class DonasHttpComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: string[] = [ 
    //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales' 
    ];

   public doughnutChartData: ChartData<'doughnut'> = {
     labels: this.doughnutChartLabels,
     datasets: [
      { data:[] }
     ]
   };
   public doughnutChartType: ChartType = 'doughnut';

  constructor(
    private _graficasService:GraficasService  ) { }

  ngOnInit(): void {
    this._graficasService.getDataDona()  
      .subscribe( data => {
        const label = Object.keys( data );
        const values =[{ data:Object.values( data )}];

        this.doughnutChartData = {
          labels:label,
          datasets: values
        }

      } )
  }

}
