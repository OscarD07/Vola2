import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  pasajeros: any[] = [];
  items: any[] = [];

  ngOnInit() {
    const formDataString = localStorage.getItem('formularioData');
    if (formDataString) {
      const formData = JSON.parse(formDataString);
      if (formData && formData.pasajeros) {
        this.pasajeros = formData.pasajeros;
        this.actualizarCarrito();
      }
    }
  }

  actualizarCarrito() {
    this.items = this.pasajeros.map(pasajero => {
      return {
        boleto: '$50', // Valor predeterminado del boleto
        cantidad: 1, // Cantidad fija por ahora
        total: 50 // Total basado en el valor predeterminado
      };
    });
  }

  vaciarCarrito() {
    this.items = [];
  }
}
