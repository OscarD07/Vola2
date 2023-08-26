import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalizacionComponent } from './personalizacion/personalizacion.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './home/header/header.component';
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HomeComponent,
    VuelosComponent,
    DestinosComponent,
    CarritoComponent,
    PagosComponent,
    PersonalizacionComponent,
    HeaderComponent,

  ],
    imports: [
        SharedModule,
        CommonModule,
        MatRadioModule,
        ReactiveFormsModule,

    ]
})
export class UserModule { }
