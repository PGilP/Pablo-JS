import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { PaginaAlumnosComponent } from './components/pagina-alumnos/pagina-alumnos.component';
import { GridImagenesComponent } from './components/grid-imagenes/grid-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CronometroComponent,
    FormatTimePipe,
    PaginaAlumnosComponent,
    GridImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
