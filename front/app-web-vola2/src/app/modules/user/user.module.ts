import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { FormularioBvComponent } from './home/formulario-bv/formulario-bv.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';



@NgModule({
  declarations: [
    HomeComponent,
    VuelosComponent,
    DestinosComponent,
    FormularioBvComponent,
    CarritoComponent,
    PagosComponent,
    PersonalizacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
