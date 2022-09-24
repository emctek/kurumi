import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieComponent } from 'src/app/componentes/pie/pie.component';

import { RecursosPage } from './recursos.page';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';

const routes: Routes = [
  {
    path: '',
    component: RecursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecursosPageRoutingModule {}
