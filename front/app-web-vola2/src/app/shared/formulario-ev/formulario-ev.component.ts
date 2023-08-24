import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-ev',
  templateUrl: './formulario-ev.component.html',
  styleUrls: ['./formulario-ev.component.scss']
})
export class FormularioEvComponent {
    datosBusqueda: any = {};
    form: FormGroup;
    constructor(private fb: FormBuilder) {
      const fechaSalidaPorDefecto = new Date();
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
      this.datosBusqueda.destino = this.form.value.destino;
      this.datosBusqueda.fechaSalida = this.form.value.fechaSalida;
      this.datosBusqueda.numPasajeros = this.form.value.numPasajeros;
    
      // Guardar los nuevos datos de búsqueda en SessionStorage
      sessionStorage.setItem('datosBusqueda', JSON.stringify(this.datosBusqueda));
    
      // Llamar a buscarVuelos() para realizar la búsqueda con los nuevos parámetros
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
}
