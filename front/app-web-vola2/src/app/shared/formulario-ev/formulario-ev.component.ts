import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Vuelo } from 'src/app/models/vuelo.model';
import { VuelosService } from '../../services/vuelos.service';
@Component({
  selector: 'app-formulario-ev',
  templateUrl: './formulario-ev.component.html',
  styleUrls: ['./formulario-ev.component.scss']
})
export class FormularioEvComponent {
    datosBusqueda: any = {};
    form: FormGroup;
  vuelos: Vuelo[] = [];
    constructor( private backendService: VuelosService, private fb: FormBuilder) {
      const datosGuardados = sessionStorage.getItem('datosBusqueda');
    if (datosGuardados) {
      this.datosBusqueda = JSON.parse(datosGuardados);
      this.buscarVuelos(); // Realizar la búsqueda cuando se cargue el componente
    }
    const fechaSalidaPorDefecto = this.datosBusqueda.fechaSalida ? new Date(this.datosBusqueda.fechaSalida) : null;

      
      // console.log (fechaSalidaPorDefecto);
      var mesIncrementado;
      this.form = this.fb.group({
        origen: [this.datosBusqueda.origen, Validators.required],
        destino: [this.datosBusqueda.destino, Validators.required],
        fechaSalida: [new Date(mesIncrementado+"/"+fechaSalidaPorDefecto?.getUTCDate().toString()+"/"+fechaSalidaPorDefecto?.getUTCFullYear().toString()), Validators.required],
        numPasajeros: [this.datosBusqueda.numPasajeros, [Validators.required, Validators.min(1)]],
      });
    }

    guardarCambiosYBuscarVuelos() {
      // Actualizar datosBusqueda con los valores del formulario
      this.datosBusqueda.origen = this.form.value.origen;
      console.log(this.form.value.origen);
      this.datosBusqueda.destino = this.form.value.destino;
      this.datosBusqueda.fechaSalida = this.form.value.fechaSalida;
      this.datosBusqueda.numPasajeros = this.form.value.numPasajeros;
    
      // Guardar los nuevos datos de búsqueda en SessionStorage
      sessionStorage.setItem('datosBusqueda', JSON.stringify(this.datosBusqueda));
    
      // Llamar a buscarVuelos() para realizar la búsqueda con los nuevos parámetros
      this.buscarVuelos()

    }


    get origenControl(): FormControl {
  const control = this.form.get('origen');
  if (control === null) {
    throw new Error('Control no encontrado');
  }
  return control as FormControl;
}

get destinoControl(): FormControl {
  const control = this.form.get('destino');
  if (control === null) {
    throw new Error('Control no encontrado');
  }
  return control as FormControl;
}

get fechaSalidaControl(): FormControl {
  const control = this.form.get('fechaSalida');
  if (control === null) {
    throw new Error('Control no encontrado');
  }
  return control as FormControl;
}

get numPasajerosControl(): FormControl {
  const control = this.form.get('numPasajeros');
  if (control === null) {
    throw new Error('Control no encontrado');
  }
  return control as FormControl;
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

}
