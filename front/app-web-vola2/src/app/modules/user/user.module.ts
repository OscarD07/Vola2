import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { FormularioBvComponent } from './home/formulario-bv/formulario-bv.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavComponent } from '../components/nav/nav.component';



@NgModule({
  declarations: [
    HomeComponent,
    VuelosComponent,
    DestinosComponent,
    CarritoComponent,
    PagosComponent,
    PersonalizacionComponent,
   
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
