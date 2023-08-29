import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-tarifa',
  templateUrl: './seleccion-tarifa.component.html',
  styleUrls: ['./seleccion-tarifa.component.scss']
})
export class SeleccionTarifaComponent {
  tarifas = [
    { label: 'Tarifa Básica', value: '1 artículo personal (morral) (debe caber bajo el asiento)', precio: 20 },
    { label: 'Tarifa Premium', value: '1 equipaje de mano (10 kg) + bolso', precio: 50},
    { label: 'Tarifa VIP', value: '1 equipaje de mano (10 kg) + bolso'+'\n1 equipaje de bodega (23 kg)', precio: 100 }
  ];
  tarifaSeleccionada: string ='';

  constructor(private router: Router) {}

  continuar() {

    if (this.tarifaSeleccionada) {
      const tarifa = this.tarifas.find(t => t.value === this.tarifaSeleccionada);
      const precioTarifa = tarifa ? tarifa.precio : 0;
      localStorage.setItem('precioTarifa', precioTarifa.toString());

      this.router.navigate(['/carrito']);
    } else {
      console.log('Selecciona una tarifa antes de continuar');
    }
  }
}
