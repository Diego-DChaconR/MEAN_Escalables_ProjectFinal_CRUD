import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalgenerateComponent } from './modalgenerate/modalgenerate.component';
import { CardComponent } from './card/card.component';
import { ModaleditComponent } from './modaledit/modaledit.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalgenerateComponent,
    ModaleditComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
