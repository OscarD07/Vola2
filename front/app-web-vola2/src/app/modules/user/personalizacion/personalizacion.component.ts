import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-personalizacion',
    templateUrl: './personalizacion.component.html',
    styleUrls: ['./personalizacion.component.scss']
})
export class PersonalizacionComponent {

    datosBusqueda: any = {};

    constructor(private router: Router) {
    }
    ngOnInit(): void {
        this.cargarDatosDeSesion();
        console.log(this.datosBusqueda.soloIda);
    }
    private cargarDatosDeSesion(): void {
        const datosGuardados = sessionStorage.getItem('datosBusqueda');

        if (datosGuardados) {
            this.datosBusqueda = JSON.parse(datosGuardados);
        }
    }

    tarifas = [
        {label: 'Tarifa Básica', value: '1 artículo personal (morral) (debe caber bajo el asiento)', precio: 0},
        {label: 'Tarifa Premium', value: '1 equipaje de mano (10 kg) + bolso', precio: 50},
        {
            label: 'Tarifa VIP',
            value: '1 equipaje de mano (10 kg) + bolso' + '\n1 equipaje de bodega (23 kg)',
            precio: 70
        }
    ];
    tarifaSeleccionada: string = '';


    establecerTarifa() {

        if (this.tarifaSeleccionada) {
            const tarifa = this.tarifas.find(t => t.value === this.tarifaSeleccionada);
            const precioTarifa = tarifa ? tarifa.precio : 0;
            sessionStorage.setItem('precioTarifa', precioTarifa.toString());
        } else {
            console.log('Selecciona una tarifa antes de continuar');
        }
    }

    nextPage(){
        this.router.navigate(['/carrito']);
    }


}
