import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  pasajeros: any[] = [];
  items: any[] = [];
  origen: string = '';
  destino: string = '';
  precioTarifa: number = 0;

  ngOnInit() {
    const formDataString = localStorage.getItem('formularioData');
    const selectedOrigen = localStorage.getItem('selectedOrigen');
    const selectedDestino = localStorage.getItem('selectedDestino');
    const storedPrecioTarifa = localStorage.getItem('precioTarifa');

    if (formDataString) {
      const formData = JSON.parse(formDataString);
      if (formData && formData.pasajeros) {
        this.pasajeros = formData.pasajeros;
        this.origen = selectedOrigen || '';
        this.destino = selectedDestino || '';
        this.precioTarifa = storedPrecioTarifa ? parseFloat(storedPrecioTarifa) : 0;

        this.actualizarCarrito();
      }
    }
  }

  actualizarCarrito() {
    const cantidadTotal = this.pasajeros.length;
    const precioUnitario = this.precioTarifa;

    this.items = [{
      boleto: 'Quito - Manta', // Ajusta esto según tu necesidad
      cantidad: cantidadTotal,
      precio: precioUnitario,
      total: precioUnitario * cantidadTotal,
    }];
  }

  calcularTotalGeneral(): number {
    return this.items.reduce((total, item) => total + (item.cantidad * item.precio), 0);
  }

  vaciarCarrito() {
    this.items = [];
  }
}
