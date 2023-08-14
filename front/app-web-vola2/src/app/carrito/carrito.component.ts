import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  pasajeros: any[] = [];

  ngOnInit() {
    const formData = JSON.parse(localStorage.getItem('formularioData'));
    if (formData && formData.pasajeros) {
      this.pasajeros = formData.pasajeros;
    }
  }

  agregarAlCarrito(boleto: string, cantidad: number, precioUnitario: number) {
    const total = cantidad * precioUnitario;
    this.items.push({ boleto, cantidad, total });
  }

  vaciarCarrito() {
    this.items = [];
  }
}
