import {Component, OnInit} from '@angular/core';


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
        this.cargarDatosDeSesion()
        this.actualizarCarrito();

    }

    actualizarCarrito() {
        const cantidadTotal = this.datosBusqueda.numPasajeros;
        const precioUnitario = this.precioTarifa;

        this.items = [{
            boleto: this.datosBusqueda.origen + " - " + this.datosBusqueda.destino, // Ajusta esto según tu necesidad
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

    datosBusqueda: any = {};
    private cargarDatosDeSesion(): void {
        const datosGuardados = sessionStorage.getItem('datosBusqueda');

        if (datosGuardados) {
            this.datosBusqueda = JSON.parse(datosGuardados);
        }
    }
}
