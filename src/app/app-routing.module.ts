import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'sesion',
    pathMatch: 'full'
  },
  {
    path: 'sesion',
    loadChildren: () => import('./paginas/sesion/sesion.module').then( m => m.SesionPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./paginas/cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./paginas/calificaciones/calificaciones.module').then( m => m.CalificacionesPageModule)
  },
  {
    path: 'grupos',
    loadChildren: () => import('./paginas/grupos/grupos.module').then( m => m.GruposPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./paginas/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'recupera',
    loadChildren: () => import('./paginas/recupera/recupera.module').then( m => m.RecuperaPageModule)
  },
  {
    path: 'iniciounico',
    loadChildren: () => import('./paginas/iniciounico/iniciounico.module').then( m => m.IniciounicoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
