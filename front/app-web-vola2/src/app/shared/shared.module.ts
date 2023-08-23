import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioEvComponent } from './formulario-ev/formulario-ev.component';
import { ResumenVueloComponent } from './resumen-vuelo/resumen-vuelo.component';
import { OpcionesFechasComponent } from './opciones-fechas/opciones-fechas.component';



@NgModule({
  declarations: [
    FormularioEvComponent,
    ResumenVueloComponent,
    OpcionesFechasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
