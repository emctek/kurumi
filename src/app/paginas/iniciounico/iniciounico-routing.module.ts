import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciounicoPage } from './iniciounico.page';

const routes: Routes = [
  {
    path: '',
    component: IniciounicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciounicoPageRoutingModule {}
