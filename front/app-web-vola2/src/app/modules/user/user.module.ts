import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
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
import {
    CarouselCaptionComponent,
    CarouselComponent, CarouselControlComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent
} from "@coreui/angular";
import {RouterLink} from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import { PasajerosComponent } from './pasajeros/pasajeros.component';
import { SeleccionTarifaComponent } from './seleccion-tarifa/seleccion-tarifa.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    VuelosComponent,
    DestinosComponent,
    CarritoComponent,
    PagosComponent,
    PersonalizacionComponent,
    HeaderComponent,
    PasajerosComponent,
    SeleccionTarifaComponent,
    CarritoComponent,

  ],
    imports: [
        SharedModule,
        CommonModule,
        MatRadioModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        CarouselComponent,
        CarouselIndicatorsComponent,
        CarouselInnerComponent,
        CarouselItemComponent,
        CarouselCaptionComponent,
        CarouselControlComponent,
        RouterLink,
        MatTabsModule,
        CommonModule,
        MatTableModule,
    ]
})
export class UserModule { }
export class CarritoModule { }
