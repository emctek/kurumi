import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login/login.component';
import { RecuperacComponent } from './recuperac/recuperac.component';
import { IniciounicocComponent } from './iniciounicoc/iniciounicoc.component';
import { CursosComponent } from './cursos/cursos.component';
import { ActividadComponent } from './actividad/actividad.component';
import { ActividadpriximaComponent } from './actividadprixima/actividadprixima.component';
import { CalendariocComponent } from './calendarioc/calendarioc.component';




@NgModule({
  declarations: [
    CabeceraComponent,
    PieComponent,
    LoginComponent,
    RecuperacComponent,
    IniciounicocComponent,
    CursosComponent,
    ActividadComponent,
    ActividadpriximaComponent,
    CalendariocComponent
  ],
  exports: [
    CabeceraComponent,
    PieComponent,
    LoginComponent,
    RecuperacComponent,
    IniciounicocComponent,
    CursosComponent,
    ActividadComponent,
    ActividadpriximaComponent,
    CalendariocComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { }
