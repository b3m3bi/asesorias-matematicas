import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { KatexModule } from 'ng-katex';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { Sesion05Component } from './componentes/paginas/sesion05/sesion05.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { Sesion06Component } from './componentes/paginas/sesion06/sesion06.component';
import { Sesion07Component } from './componentes/paginas/sesion07/sesion07.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Sesion05Component,
    FooterComponent,
    Sesion06Component,
    Sesion07Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KatexModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
