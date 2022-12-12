import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ResizeImageComponent } from './components/resize-image/resize-image.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PopupComponent } from './components/popup/popup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ResizeImageComponent,
    NavBarComponent,
    PopupComponent,
    FooterComponent,
    HeroSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
