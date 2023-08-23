
import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad.model';


@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  constructor() { }

  filterCiudades(value: string, ciudadesList: Ciudad[]): Ciudad[] {
    if (value) {
      const searchTerm = value.toLowerCase();
      return ciudadesList.filter(ciudad =>
        ciudad.nombreCiudad.toLowerCase().includes(searchTerm) ||
        ciudad.codigoCiudad.toLowerCase().includes(searchTerm) ||
        ciudad.nombreAeropuerto.toLowerCase().includes(searchTerm)
      );
    } else {
      return [];
    }
  }
}