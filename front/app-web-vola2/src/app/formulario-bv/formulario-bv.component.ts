import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VuelosService } from '../services/vuelos.service';

@Component({
  selector: 'app-formulario-bv',
  templateUrl: './formulario-bv.component.html',
  styleUrls: ['./formulario-bv.component.scss']
})
export class FormularioBvComponent {
  flightForm: FormGroup;
  selectedForm: string | null = 'solo-ida';
  showError: boolean = false; // Variable para mostrar el mensaje de error
  ciudades: string[] = []; // Definir el array de ciudades aquí

  constructor(private router: Router, private fb: FormBuilder, private vuelosService: VuelosService){
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

     // Obtén los valores del formulario
     const { origen, destino, fechaSalida, fechaRegreso, numPasajeros } = this.flightForm.value;

     // Llama al servicio para buscar vuelos
     this.vuelosService.buscarVuelos(origen, destino, fechaSalida, numPasajeros)
       .subscribe((result) => {
         // Manejar el resultado de la API
         console.log(result);
         // Redirige a la página de vuelos
         this.router.navigate(['/vuelos']);// Redirige a la página de vuelos
       }); 
  }
}
