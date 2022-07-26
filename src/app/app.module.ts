import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosModule } from './juegos/juegos.module';
import { SharedModule } from './shared/shared.module';
import { ClientRoutingModule } from './client/client-routing.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JuegosModule,
    SharedModule,
    HttpClientModule,
    ClientRoutingModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }