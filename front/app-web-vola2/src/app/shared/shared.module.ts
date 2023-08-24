import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
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

@NgModule({
    
    declarations: [
        FormularioEvComponent,
        ResumenVueloComponent,
        OpcionesFechasComponent,
        InputFiltradoComponent
    ],
    exports: [
        FormularioEvComponent,
        InputFiltradoComponent,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCardModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatInputModule,
        MatToolbarModule,
        FormsModule
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
        FormsModule
    ]
})
export class SharedModule { }
