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

  datosBusqueda: any = {};
  pasajeros: any[] = [];
  paises: Pais[] = PAISES_DATA; // Asegúrate de importar la lista de países correctamente
  cantidadPasajeros: number = 0;
  form: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      personasFormArray: this.fb.array([

      ])
    });



    const datosG = sessionStorage.getItem('datosBusqueda');
    if (datosG) {
      this.datosBusqueda = JSON.parse(datosG);
    }
    this.cantidadPasajeros = this.datosBusqueda.numPasajeros;
    this.inicializarForms();
  }

  inicializarForms(){
    for (let i=1 ;i<=this.cantidadPasajeros;++i){
      this.addPersonas();

  }
}

  get personasFormArray(): FormArray{
    return this.form.get('personasFormArray') as FormArray;
  }

  addPersonas(){
    const personaFormGroup = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      codigoArea:[''],
      telefono:[""]
    }) ;
    this.personasFormArray.push(personaFormGroup);
    this.pasajeros.push(personaFormGroup.value);
  }

  guardarYContinuar() {
    const formData = {
      pasajeros: this.pasajeros
    };
    localStorage.setItem('formularioData', JSON.stringify(formData));
    this.router.navigate(['/carrito']);
  }
}

