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
    asientos: AsientoConSeleccion[] = [];
    datosAsientos: Asiento[] = ASIENTOS_DATA;

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

}
