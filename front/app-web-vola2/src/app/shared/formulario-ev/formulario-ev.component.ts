import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-ev',
  templateUrl: './formulario-ev.component.html',
  styleUrls: ['./formulario-ev.component.scss']
})
export class FormularioEvComponent {
    origen: FormControl = new FormControl('Valor inicial', Validators.required);
    destino: string = '';
    fechaSalida: string = '';
    fechaRegreso: string = '';
    numPasajeros: number = 0;
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
      const origen = this.origenControl.value;
  const destino = this.destinoControl.value;
  console.log("hola");
      // Actualizar datosBusqueda con los valores del formulario
      this.datosBusqueda.origen = this.form.value.origen;
      this.datosBusqueda.destino = this.form.value.destino;
      this.datosBusqueda.fechaSalida = this.form.value.fechaSalida;
      this.datosBusqueda.numPasajeros = this.form.value.numPasajeros;
    
      // Guardar los nuevos datos de búsqueda en SessionStorage
      sessionStorage.setItem('datosBusqueda', JSON.stringify(this.datosBusqueda));
    
      // Llamar a buscarVuelos() para realizar la búsqueda con los nuevos parámetros
    }

    recibirDato(event: any) {
      this.origen = event;
      console.log(this.origen);
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
}
