import {Component} from '@angular/core';

@Component({
    selector: 'app-personalizacion',
    templateUrl: './personalizacion.component.html',
    styleUrls: ['./personalizacion.component.scss']
})
export class PersonalizacionComponent {

    datosBusqueda: any = {};

    constructor() {}
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
}
