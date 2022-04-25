import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonasComponent } from './pages/donas/donas.component';
import { DonasHttpComponent } from './pages/donas-http/donas-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonasComponent,
    DonasHttpComponent,
    GraficaBarraComponent
   
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule 
  ]
})
export class GraficasModule { }
