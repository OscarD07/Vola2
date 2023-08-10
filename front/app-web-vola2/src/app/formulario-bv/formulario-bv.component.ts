import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-bv',
  templateUrl: './formulario-bv.component.html',
  styleUrls: ['./formulario-bv.component.scss']
})
export class FormularioBvComponent {
 
  flightForm: FormGroup;
  selectedForm: string | null = 'solo-ida';
  showError: boolean = false; // Variable para mostrar el mensaje de error
  constructor(private router: Router, private fb: FormBuilder){
    this.flightForm = this.fb.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      fechaRegreso: [''],
      numPasajeros: [1, [Validators.required, Validators.min(1)]]
    });
  }
  
  buscarVuelo() {
    this.showError = true; // Mostrar el mensaje de error
    if (this.flightForm.invalid) {
    return; 
    }

    const datosBusqueda = {
      origen: this.flightForm.value.origen,
      destino: this.flightForm.value.destino,
      fechaSalida: this.flightForm.value.fechaSalida,
    };

    sessionStorage.setItem('datosBusqueda', JSON.stringify(datosBusqueda));
    this.router.navigate(['/vuelos']);
  }
}