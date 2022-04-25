import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonasComponent } from './pages/donas/donas.component';
import { DonasHttpComponent } from './pages/donas-http/donas-http.component';

const routes: Routes = [

  {
    path:'',
    children:[
      {
        path:'barras',
        component: BarrasComponent
      },
      {
        path:'barras-dobles',
        component: BarrasDoblesComponent
      },
      {
        path:'dona',
        component: DonasComponent
      },
      {
        path:'dona-http',
        component: DonasHttpComponent
      },
      {
        path:'**',
        redirectTo:'barras'
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
