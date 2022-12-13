import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { FormatTimePipe } from './pipes/format-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CronometroComponent,
    FormatTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
