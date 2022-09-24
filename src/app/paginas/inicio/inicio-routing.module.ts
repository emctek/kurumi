import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';
import { PieComponent } from 'src/app/componentes/pie/pie.component';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
