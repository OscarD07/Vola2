import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { PAISES_DATA } from '../constants/paises.const';
import { Pais } from '../models/pais.model';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.scss']
})
export class PasajerosComponent {

  errorMessage: string = '';
  datosBusqueda: any = {};
  pasajeros: any[] = [];
  paises: Pais[] = PAISES_DATA;
  cantidadPasajeros: number = 0;
  form: FormGroup;
  currentFormIndex: number = 0;
  origenVuelo: string;
  destinoVuelo: string;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      personasFormArray: this.fb.array([])
    });

    const datosG = sessionStorage.getItem('datosBusqueda');
    if (datosG) {
      this.datosBusqueda = JSON.parse(datosG);
    }
    this.cantidadPasajeros = this.datosBusqueda.numPasajeros;
    this.origenVuelo = this.datosBusqueda.origen;
    this.destinoVuelo = this.datosBusqueda.destino;
    this.inicializarForms();
  }

  inicializarForms() {
    for (let i = 1; i <= this.cantidadPasajeros; ++i) {
      this.addPersonas();
    }
  }

  get personasFormArray(): FormArray {
    return this.form.get('personasFormArray') as FormArray;
  }

  addPersonas() {
    const personaFormGroup = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      codigoArea: ['', Validators.required],
      telefono: ['', Validators.required]
    });

    this.personasFormArray.push(personaFormGroup);

    if (personaFormGroup.value) {
      this.pasajeros.push(personaFormGroup.value);
    }
  }

  guardarYContinuar() {
    if (this.form.valid) {
      if (this.currentFormIndex < this.cantidadPasajeros - 1) {
        this.currentFormIndex++;
      } else {
        const formData = {
          pasajeros: this.pasajeros
        };
        localStorage.setItem('formularioData', JSON.stringify(formData));
        this.router.navigate(['/carrito']);
      }
      this.errorMessage = ''; // Clear the error message when navigating to the next form
    } else {
      this.errorMessage = 'Por favor, complete todos los campos del formulario.';
    }
  }
}
