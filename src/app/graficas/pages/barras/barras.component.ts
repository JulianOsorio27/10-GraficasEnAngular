import { Component,  OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  
  };

public barChartType: ChartType = 'bar';

  
public barChartData: ChartData<'bar'> = {
  labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  datasets: [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor:'#D324D4', hoverBackgroundColor:'#7DD419' },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor:'#4224D4', hoverBackgroundColor:'#EBE729' },
    { data: [ 8, 58, 20, 9, 39, 1, 50 ], label: 'Series C', backgroundColor:'#9F34EB', hoverBackgroundColor:'#F59C36'},
  ]
};

constructor() { }

ngOnInit(): void {
}

public randomize(): void {
  // Only Change 3 values
  this.barChartData.datasets[0].data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
   ];

   this.barChartData.datasets[1].data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
   ];

   this.barChartData.datasets[2].data = [
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
    Math.round(Math.random() * 100),
   ];

    this.chart?.update();

}

 

}
