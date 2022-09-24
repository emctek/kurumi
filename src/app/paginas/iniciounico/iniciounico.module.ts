import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciounicoPageRoutingModule } from './iniciounico-routing.module';

import { IniciounicoPage } from './iniciounico.page';
import { ComponentesModule } from '../../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciounicoPageRoutingModule,
    ComponentesModule
  ],
  declarations: [IniciounicoPage]
})
export class IniciounicoPageModule {}
