import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionPage } from './sesion.page';
import { PieComponent } from '../../componentes/pie/pie.component';
import { LoginComponent } from '../../componentes/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: SesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SesionPageRoutingModule {}
