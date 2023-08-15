import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VuelosComponent } from './vuelos/vuelos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormularioBvComponent } from './formulario-bv/formulario-bv.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    VuelosComponent,
    DestinosComponent,
    OfertasComponent,
    HomeComponent,
    FormularioBvComponent,
  ],
  imports: [
    MatRadioModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule, 
    //PARA FECHA
    MatCardModule
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary'}, // Cambia 'primary' al color que desees
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
