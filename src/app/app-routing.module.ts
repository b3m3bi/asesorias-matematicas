import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sesion05Component } from './componentes/paginas/sesion05/sesion05.component';
import { Sesion06Component } from './componentes/paginas/sesion06/sesion06.component';
import { Sesion07Component } from './componentes/paginas/sesion07/sesion07.component';

const routes: Routes = [
  { path: '05', component: Sesion05Component },
  { path: '06', component: Sesion06Component },
  { path: '07', component: Sesion07Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
