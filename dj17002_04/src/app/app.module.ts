import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AzulComponent } from './modulosvistas/azul/azul.component';
import { MoradoComponent } from './modulosvistas/morado/morado.component';
import { RojoComponent } from './modulosvistas/rojo/rojo.component';
import { VerdeComponent } from './modulosvistas/verde/verde.component';

@NgModule({
  declarations: [
    AppComponent,
    AzulComponent,
    MoradoComponent,
    RojoComponent,
    VerdeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
