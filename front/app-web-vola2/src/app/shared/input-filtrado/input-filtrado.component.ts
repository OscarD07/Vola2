import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CIUDADES_DATA } from '../../constants/ciudades.const';
import { Ciudad } from '../../models/ciudad.model';
import { CiudadesService } from 'src/app/services/ciudad.service';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-filtrado',
  templateUrl: './input-filtrado.component.html',
  styleUrls: ['./input-filtrado.component.scss']
})
export class InputFiltradoComponent {
  filteredCiudades: any[] = [];
  ciudades: Ciudad[] = CIUDADES_DATA;
  origen: string = '';
  @Input() control: FormControl; 
  constructor(private ciudadesService: CiudadesService) {
     this.control = new FormControl();
   
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
