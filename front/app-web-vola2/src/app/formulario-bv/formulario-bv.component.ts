import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CIUDADES_DATA } from '../constants/ciudades.const';
import { Ciudad } from '../models/ciudad.model';


@Component({
  selector: 'app-formulario-bv',
  templateUrl: './formulario-bv.component.html',
  styleUrls: ['./formulario-bv.component.scss']
})
export class FormularioBvComponent {

  flightForm: FormGroup;
  selectedForm: string | null = 'solo-ida';
  showError: boolean = false; // Variable para mostrar el mensaje de error
  ciudades: Ciudad[] = CIUDADES_DATA;
  filteredCiudadesDestino: Ciudad[] = [];
  filteredCiudadesOrigen: Ciudad[] = [];

  isOrigenInputEmpty: boolean = true;
  isDestinoInputEmpty: boolean = true;
  constructor(private router: Router, private fb: FormBuilder) {
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
      numPasajeros: this.flightForm.value.numPasajeros
    };

    sessionStorage.setItem('datosBusqueda', JSON.stringify(datosBusqueda));
    this.router.navigate(['/vuelos']);
  }

  filterCiudades(event: any, isDestino: boolean) {
    const value = event.target.value.toLowerCase();
    const ciudadesList = isDestino ? this.ciudades : this.ciudades;

    if (value) {
      const searchTerm = value.toLowerCase();
      const filteredCiudades = ciudadesList.filter(ciudad =>
        ciudad.nombreCiudad.toLowerCase().includes(searchTerm) ||
        ciudad.codigoCiudad.toLowerCase().includes(searchTerm) ||
        ciudad.nombreAeropuerto.toLowerCase().includes(searchTerm)
      );

      if (isDestino) {
        this.filteredCiudadesDestino = filteredCiudades.map(ciudad => ({
          ...ciudad,
          highlightedNombre: false
        }));
      } else {
        this.filteredCiudadesOrigen = filteredCiudades.map(ciudad => ({
          ...ciudad,
          highlightedNombre: false
        }));
      }
    } else {
      if (isDestino) {
        this.filteredCiudadesDestino = [];
      } else {
        this.filteredCiudadesOrigen = [];
      }
    }
  }

  seleccionarCiudad(ciudad: Ciudad, campo: string) {
    this.flightForm.controls[campo].setValue(ciudad.nombreCiudad);
    if (campo === 'origen') {
      this.filteredCiudadesOrigen = [];
    } else {
      this.filteredCiudadesDestino = [];
    }
  }
}

