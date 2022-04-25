import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  // @Input() horizontal:boolean = false


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  
  };

public barChartType: ChartType = 'bar';

  
@Input() barChartData: ChartData<'bar'> = {
  // labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    // { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#D324D4', hoverBackgroundColor:'#7DD419' },
    // { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#4224D4', hoverBackgroundColor:'#EBE729' },
    // { data: [ 8, 58, 20, 9, 39, 1, 50 ], label: 'Series C', backgroundColor:'#9F34EB', hoverBackgroundColor:'#F59C36'},
  ]
};

  constructor() { }

  ngOnInit(): void {
  }

}
