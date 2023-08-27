import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioEvComponent } from './formulario-ev/formulario-ev.component';
import { ResumenVueloComponent } from './resumen-vuelo/resumen-vuelo.component';
import { OpcionesFechasComponent } from './opciones-fechas/opciones-fechas.component';
import { InputFiltradoComponent } from './input-filtrado/input-filtrado.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MostrarVuelosComponent } from './mostrar-vuelos/mostrar-vuelos.component';
import { FechasCercanasComponent } from './fechas-cercanas/fechas-cercanas.component';
import  {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule  }from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { AsientoComponent } from './asiento/asiento.component';
import { AvionComponent } from './avion/avion.component';
import { CardResumenVueloComponent } from './card-resumen-vuelo/card-resumen-vuelo.component';
@NgModule({

    declarations: [
        FormularioEvComponent,
        ResumenVueloComponent,
        OpcionesFechasComponent,
        InputFiltradoComponent,
        MostrarVuelosComponent,
        FechasCercanasComponent,
        AsientoComponent,
        AvionComponent,
        CardResumenVueloComponent
    ],
    exports: [
        FormularioEvComponent,
        InputFiltradoComponent,
        MostrarVuelosComponent,
        FechasCercanasComponent,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule,
        MatButtonModule,
        MatDividerModule,
        HttpClientModule,
        MatIconModule,
        MatRadioModule,
        AvionComponent
    ],
    imports: [
        CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        MatToolbarModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatDividerModule,
        HttpClientModule,
        MatIconModule,
        MatRadioModule
    ]
})
export class SharedModule { }
