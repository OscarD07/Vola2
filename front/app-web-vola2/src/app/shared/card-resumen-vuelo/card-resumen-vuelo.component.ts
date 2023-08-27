import { Component } from '@angular/core';

@Component({
  selector: 'app-card-resumen-vuelo',
  templateUrl: './card-resumen-vuelo.component.html',
  styleUrls: ['./card-resumen-vuelo.component.scss']
})
export class CardResumenVueloComponent {
  datosVuelo: any;

  ngOnInit(): void {
    // Leer datos del vuelo seleccionado desde sessionStorage
    const datosGuardados = sessionStorage.getItem('datosVueloSeleccionado');
    if (datosGuardados) {
      this.datosVuelo = JSON.parse(datosGuardados);
    }
  }
}
