import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';
import { PieComponent } from 'src/app/componentes/pie/pie.component';

import { InicioPage } from './inicio.page';
import { CursosComponent } from '../../componentes/cursos/cursos.component';
import { ActividadComponent } from '../../componentes/actividad/actividad.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'cursocard',
    component: CursosComponent
  },
  {
    path: 'actividadcard',
    component: ActividadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
