import { Component, OnInit } from '@angular/core';
import { EstateEnum } from '../../enums/estate.enum';
import {Asiento, AsientoConSeleccion} from '../../models/asiento.model';
import { ASIENTOS_DATA } from '../../constants/asientos.const';
import { SeleccionAsientoService } from '../../services/seleccion-asiento.service';

@Component({
    selector: 'app-avion',
    templateUrl: './avion.component.html',
    styleUrls: ['./avion.component.scss']
})
export class AvionComponent implements OnInit {
    EstateEnum = EstateEnum;
    maxAsientosSeleccionados = 3;
    asientos: AsientoConSeleccion[] = [];
    datosAsientos: Asiento[] = ASIENTOS_DATA;
    cantidadAsientosSeleccionados: number = 0;


    constructor(private seleccionAsientoService: SeleccionAsientoService) {}

    ngOnInit(): void {
        this.asientos = this.datosAsientos.map(asiento => ({
            ...asiento,
            seleccionado: false
        }));
    }

    get letrasUnicas(): string[] {
        return [
            ...new Set(
                this.asientos.map(asiento =>
                    parseInt(asiento.numero) >= 10
                        ? asiento.numero.charAt(2)
                        : asiento.numero.charAt(1)
                )
            )
        ];
    }

    obtenerAsientosPorLetra(letra: string): AsientoConSeleccion[] {
        return this.asientos.filter(asiento => {
            const numeroFila = parseInt(asiento.numero);
            if (numeroFila >= 10) {
                return asiento.numero.charAt(2) === letra;
            } else {
                return asiento.numero.charAt(1) === letra;
            }
        });
    }
    toggleSeleccion(asiento: AsientoConSeleccion) {
        if (!asiento.seleccionado && this.cantidadAsientosSeleccionados >= this.maxAsientosSeleccionados) {
            return; // No permitir selección si se alcanza el máximo
        }

        if (asiento.seleccionado) {
            this.cantidadAsientosSeleccionados--;
        } else {
            this.cantidadAsientosSeleccionados++;
        }

        asiento.seleccionado = !asiento.seleccionado;
    }

}
