import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { SharedModule } from '../../shared/shared.module';



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
    SharedModule,
    CommonModule,
    
  ]
})
export class UserModule { }
