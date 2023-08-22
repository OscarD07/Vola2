import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VuelosService, Vuelo } from '../services/vuelos.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CIUDADES_DATA } from '../constants/ciudades.const';
import { Ciudad } from '../models/ciudad.model';
import { CiudadesService } from '../services/ciudades.service';
@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class VuelosComponent {
  filteredCiudades: any[] = [];
  form: FormGroup;
  hola = ``;
  origen: string = '';
  destino: string = '';
  fecha: string = '';
  vuelos: Vuelo[] = [];
  ciudades: Ciudad[] = CIUDADES_DATA;
  
  datosBusqueda: any = {};
  selectedForm: string | null = 'solo-ida';
  constructor(private backendService: VuelosService, private fb: FormBuilder, private ciudadesService: CiudadesService) {
  
   
    // Recuperar los datos de búsqueda de SessionStorage
    const datosGuardados = sessionStorage.getItem('datosBusqueda');
    if (datosGuardados) {
      this.datosBusqueda = JSON.parse(datosGuardados);
      this.buscarVuelos(); // Realizar la búsqueda cuando se cargue el componente
    }
    const fechaSalidaPorDefecto = this.datosBusqueda.fechaSalida ? new Date(this.datosBusqueda.fechaSalida) : null;
    var mesIncrementado;
    if (fechaSalidaPorDefecto instanceof Date) {
      // Sumar 1 al mes
      mesIncrementado = fechaSalidaPorDefecto.getUTCMonth() + 1;
      mesIncrementado = mesIncrementado.toString().length == 1 ? "0" + mesIncrementado.toString() : mesIncrementado.toString();
      console.log(mesIncrementado);
    } else {
      console.log("La fecha por defecto no es válida.");
    }
  

    // sumale 1 al mes

    console.log(mesIncrementado+"/"+fechaSalidaPorDefecto?.getUTCDate().toString()+"/"+fechaSalidaPorDefecto?.getUTCFullYear().toString());
     this.form = this.fb.group({
      origen: [this.datosBusqueda.origen, Validators.required],
      destino: [this.datosBusqueda.destino, Validators.required],
      fechaSalida: [new Date(mesIncrementado+"/"+fechaSalidaPorDefecto?.getUTCDate().toString()+"/"+fechaSalidaPorDefecto?.getUTCFullYear().toString()), Validators.required],
      numPasajeros: [this.datosBusqueda.numPasajeros, [Validators.required, Validators.min(1)]],
    });
  }

  
  buscarVuelos() {
    // Utiliza this.datosBusqueda para realizar la búsqueda de vuelos
    
    

    this.backendService
      .buscarVueloDatos(
        this.datosBusqueda.origen,
        this.datosBusqueda.destino,
        this.datosBusqueda.fechaSalida,
        this.datosBusqueda.numPasajeros
      )
      .subscribe(
        (data) => {
          this.vuelos = data.vuelos;
          // Procesar los datos recibidos del backend
        },
        (error) => {
          console.error('Error al buscar vuelos:', error);
        }
      );
     // this.hola = typeof (new Date(this.datosBusqueda.fechaSalida)) 
  }

  handleFilteredCiudades(filtered: any[]): void {
    this.filteredCiudades = filtered;
  }

  guardarCambiosYBuscarVuelos() {
    // Actualizar datosBusqueda con los valores del formulario
    this.datosBusqueda.origen = this.form.value.origen;
    this.datosBusqueda.destino = this.form.value.destino;
    this.datosBusqueda.fechaSalida = this.form.value.fechaSalida;
    this.datosBusqueda.numPasajeros = this.form.value.numPasajeros;
  
    // Guardar los nuevos datos de búsqueda en SessionStorage
    sessionStorage.setItem('datosBusqueda', JSON.stringify(this.datosBusqueda));
  
    // Llamar a buscarVuelos() para realizar la búsqueda con los nuevos parámetros
    this.buscarVuelos();
  }
  

  filterCiudades(event: any, isDestino: boolean) {
    const value = event.target.value;
    const ciudadesList = isDestino ? this.ciudades : this.ciudades;
    const filteredCiudades = this.ciudadesService.filterCiudades(value, ciudadesList); // Usa el servicio aquí

    if (isDestino) {
      this.filteredCiudades = filteredCiudades.map(ciudad => ({
        ...ciudad,
        highlightedNombre: false
      }));
    } else {
      this.filteredCiudades = filteredCiudades.map(ciudad => ({
        ...ciudad,
        highlightedNombre: false
      }));
    }
  }

}
