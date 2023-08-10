import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VuelosService, Vuelo } from '../services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.scss'],
})
export class VuelosComponent {
  hola = ``;
  vuelos: Vuelo[] = [];
  datosBusqueda: any = {};
  constructor(private backendService: VuelosService) {
    // Recuperar los datos de búsqueda de SessionStorage
    const datosGuardados = sessionStorage.getItem('datosBusqueda');
    if (datosGuardados) {
      this.datosBusqueda = JSON.parse(datosGuardados);
      this.buscarVuelos(); // Realizar la búsqueda cuando se cargue el componente
    }
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
  }
}
