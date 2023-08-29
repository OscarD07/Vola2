import {Component, OnInit} from '@angular/core';
import {VuelosService} from "../../../services/vuelos.service";


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
    precioIda: number = 0;
    precioVuelta: number = 0;
    vueloIda: any = {};
    vueloRegreso: any = {};
    datosBusqueda: any = {};

    constructor(private BackendService: VuelosService) {
    }


    ngOnInit() {
        this.cargarDatosDeSesion()
        this.cargarDatosDeVuelos();
        this.cargarPrecio();
        this.actualizarCarrito();
    }

    actualizarCarrito() {
        const precioIda = this.precioIda;
        const precioVuelta = this.precioVuelta;
        const precioTarifa = this.precioTarifa;
        this.items = [{
            boleto: this.datosBusqueda.origen + " - " + this.datosBusqueda.destino, // Ajusta esto según tu necesidad
            cantidad: this.datosBusqueda.numPasajeros,
            ida: precioIda,
            vuelta: precioVuelta,
            adicionales: precioTarifa,
            total: (precioIda + precioVuelta + precioTarifa) * this.datosBusqueda.numPasajeros
        }];

    }

    calcularTotalGeneral(): number {
        return (this.precioIda + this.precioVuelta + this.precioTarifa) * this.datosBusqueda.numPasajeros;
    }

    vaciarCarrito() {
        this.items = [];
    }


    private cargarDatosDeSesion(): void {
        const datosGuardados = sessionStorage.getItem('datosBusqueda');

        if (datosGuardados) {
            this.datosBusqueda = JSON.parse(datosGuardados);
        }
    }

    private cargarDatosDeVuelos(): void {
        const datosGuardados = sessionStorage.getItem('vueloIda');
        const datosGuardadosRegreso = sessionStorage.getItem('vueloRegreso');

        if (datosGuardados) {
            this.vueloIda = JSON.parse(datosGuardados);
            this.precioIda = this.vueloIda[0].precio;
        }
        if (datosGuardadosRegreso) {
            this.vueloRegreso = JSON.parse(datosGuardadosRegreso);
            this.precioVuelta = this.vueloRegreso[0].precio;
        }
    }

    private cargarPrecio(): void {
        const datosGuardados = sessionStorage.getItem('precioTarifa');
        if (datosGuardados) {
            this.precioTarifa = JSON.parse(datosGuardados);
        }
    }

    pagar(): void {
        const total = this.calcularTotalGeneral();
        this.BackendService.solicitarLinkPago(total).subscribe((res: any) => {
            const url = res; // Assuming res is the URL enclosed in double quotes
            if (url) {
                const cleanUrl = url.replace(/"/g, ''); // Remove double quotes from the URL
                window.open(cleanUrl);
            }
        });

    }

}
