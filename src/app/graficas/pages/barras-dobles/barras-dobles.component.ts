import { Component  } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styles: [
  ]
})
export class BarrasDoblesComponent   {

  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 100,50,300,200,500 ], label: 'Vendedor A'},
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' }
    ]
  }
   
  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  }

}