import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';
import { PieComponent } from 'src/app/componentes/pie/pie.component';

import { CursosPage } from './cursos.page';

const routes: Routes = [
  {
    path: '',
    component: CursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosPageRoutingModule {}
