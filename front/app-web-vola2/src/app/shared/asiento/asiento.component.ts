// asiento.component.ts
import { Component, Input } from '@angular/core';
import {EstateEnum} from "../../enums/estate.enum";

@Component({
    selector: 'app-asiento',
    templateUrl: './asiento.component.html',
    styleUrls: ['./asiento.component.scss']
})
export class AsientoComponent {
    @Input() estado: EstateEnum = EstateEnum.DISPONIBLE;
    EstateEnum = EstateEnum; // Para poder usar el enum en el template

    seleccionado: boolean = false;
    numero: String = "";

    toggleSeleccion() {
        if (this.estado === EstateEnum.DISPONIBLE) {
            this.seleccionado = !this.seleccionado;
        }
    }
}
