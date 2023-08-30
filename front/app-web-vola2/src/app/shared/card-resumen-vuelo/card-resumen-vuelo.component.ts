import {Component, Input, OnInit} from '@angular/core';
import {Vuelo} from 'src/app/models/vuelo.model';

@Component({
    selector: 'app-card-resumen-vuelo',
    templateUrl: './card-resumen-vuelo.component.html',
    styleUrls: ['./card-resumen-vuelo.component.scss']
})
export class CardResumenVueloComponent implements OnInit {
    @Input() vuelo: Vuelo | null = null;

    datosBusqueda: any = {};


    constructor() {
    }

    ngOnInit(): void {
        this.cargarDatosDeSesion()
    }

    private cargarDatosDeSesion(): void {
        const datosGuardados = sessionStorage.getItem('datosBusqueda');
        if (datosGuardados) {
            this.datosBusqueda = JSON.parse(datosGuardados);
        }
    }

}
