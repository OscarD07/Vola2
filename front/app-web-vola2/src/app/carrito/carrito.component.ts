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

  ngOnInit() {
    const formDataString = localStorage.getItem('formularioData');
    const selectedOrigen = localStorage.getItem('selectedOrigen');
    const selectedDestino = localStorage.getItem('selectedDestino');
    if (formDataString) {
      const formData = JSON.parse(formDataString);
      if (formData && formData.pasajeros) {
        this.pasajeros = formData.pasajeros;
        this.origen = selectedOrigen || ''; // Default to empty string if null
        this.destino = selectedDestino || ''; // Default to empty string if null
        this.actualizarCarrito();
      }
    }
  }

  actualizarCarrito() {
    const cantidadTotal = this.pasajeros.length; // Sum up the quantity of all passengers
    const precioUnitario = 50; // Replace with your actual price calculation

    this.items = [{
      boleto: this.origen + ' - ' + this.destino,
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
