import {Component} from '@angular/core';
import {EstateEnum} from "../../enums/estate.enum";

@Component({
    selector: 'app-avion',
    templateUrl: './avion.component.html',
    styleUrls: ['./avion.component.scss']
})
export class AvionComponent {
    EstateEnum = EstateEnum;
    asientos = [
        {estado: EstateEnum.OCUPADO, numero: "1A"},
        {estado: EstateEnum.OCUPADO, numero: "1B"},
        {estado: EstateEnum.DISPONIBLE, numero: "1C"},
        {estado: EstateEnum.DISPONIBLE, numero: "1D"},
        {estado: EstateEnum.DISPONIBLE, numero: "1E"},
        {estado: EstateEnum.DISPONIBLE, numero: "1F"},
        {estado: EstateEnum.DISPONIBLE, numero: "2A"},
        {estado: EstateEnum.DISPONIBLE, numero: "2B"},
        {estado: EstateEnum.OCUPADO, numero: "2C"},
        {estado: EstateEnum.DISPONIBLE, numero: "2D"},
        {estado: EstateEnum.DISPONIBLE, numero: "2E"},
        {estado: EstateEnum.DISPONIBLE, numero: "2F"},
        {estado: EstateEnum.OCUPADO, numero: "3A"},
        {estado: EstateEnum.DISPONIBLE, numero: "3B"},
        {estado: EstateEnum.DISPONIBLE, numero: "3C"},
        {estado: EstateEnum.OCUPADO, numero: "3D"},
        {estado: EstateEnum.DISPONIBLE, numero: "3E"},
        {estado: EstateEnum.DISPONIBLE, numero: "3F"},
        {estado: EstateEnum.DISPONIBLE, numero: "4A"},
        {estado: EstateEnum.OCUPADO, numero: "4B"},
        {estado: EstateEnum.DISPONIBLE, numero: "4C"},
        {estado: EstateEnum.DISPONIBLE, numero: "4D"},
        {estado: EstateEnum.OCUPADO, numero: "4E"},
        {estado: EstateEnum.DISPONIBLE, numero: "4F"},
        {estado: EstateEnum.DISPONIBLE, numero: "5A"},
        {estado: EstateEnum.OCUPADO, numero: "5B"},
        {estado: EstateEnum.DISPONIBLE, numero: "5C"},
        {estado: EstateEnum.DISPONIBLE, numero: "5D"},
        {estado: EstateEnum.OCUPADO, numero: "5E"},
        {estado: EstateEnum.DISPONIBLE, numero: "5F"},
        {estado: EstateEnum.DISPONIBLE, numero: "6A"},
        {estado: EstateEnum.OCUPADO, numero: "6B"},
        {estado: EstateEnum.DISPONIBLE, numero: "6C"},
        {estado: EstateEnum.DISPONIBLE, numero: "6D"},
        {estado: EstateEnum.OCUPADO, numero: "6E"},
        {estado: EstateEnum.DISPONIBLE, numero: "6F"},
        {estado: EstateEnum.DISPONIBLE, numero: "7A"},
        {estado: EstateEnum.OCUPADO, numero: "7B"},
        {estado: EstateEnum.DISPONIBLE, numero: "7C"},
        {estado: EstateEnum.DISPONIBLE, numero: "7D"},
        {estado: EstateEnum.OCUPADO, numero: "7E"},
        {estado: EstateEnum.DISPONIBLE, numero: "7F"},
        {estado: EstateEnum.DISPONIBLE, numero: "8A"},
        {estado: EstateEnum.OCUPADO, numero: "8B"},
        {estado: EstateEnum.DISPONIBLE, numero: "8C"},
        {estado: EstateEnum.DISPONIBLE, numero: "8D"},
        {estado: EstateEnum.OCUPADO, numero: "8E"},
        {estado: EstateEnum.DISPONIBLE, numero: "8F"},
        {estado: EstateEnum.DISPONIBLE, numero: "9A"},
        {estado: EstateEnum.OCUPADO, numero: "9B"},
        {estado: EstateEnum.DISPONIBLE, numero: "9C"},
        {estado: EstateEnum.DISPONIBLE, numero: "9D"},
        {estado: EstateEnum.OCUPADO, numero: "9E"},
        {estado: EstateEnum.DISPONIBLE, numero: "9F"},
        {estado: EstateEnum.DISPONIBLE, numero: "10A"},
        {estado: EstateEnum.OCUPADO, numero: "10B"},
        {estado: EstateEnum.DISPONIBLE, numero: "10C"},
        {estado: EstateEnum.DISPONIBLE, numero: "10D"},
        {estado: EstateEnum.OCUPADO, numero: "10E"},
        {estado: EstateEnum.DISPONIBLE, numero: "10F"},
        {estado: EstateEnum.DISPONIBLE, numero: "11A"},
        {estado: EstateEnum.OCUPADO, numero: "11B"},
        {estado: EstateEnum.DISPONIBLE, numero: "11C"},
        {estado: EstateEnum.DISPONIBLE, numero: "11D"},
        {estado: EstateEnum.OCUPADO, numero: "11E"},
        {estado: EstateEnum.DISPONIBLE, numero: "11F"},
        {estado: EstateEnum.DISPONIBLE, numero: "12A"},
        {estado: EstateEnum.OCUPADO, numero: "12B"},
        {estado: EstateEnum.DISPONIBLE, numero: "12C"},
        {estado: EstateEnum.DISPONIBLE, numero: "12D"},
        {estado: EstateEnum.OCUPADO, numero: "12E"},
        {estado: EstateEnum.DISPONIBLE, numero: "12F"},
        {estado: EstateEnum.DISPONIBLE, numero: "13A"},
        {estado: EstateEnum.OCUPADO, numero: "13B"},
        {estado: EstateEnum.DISPONIBLE, numero: "13C"},
        {estado: EstateEnum.DISPONIBLE, numero: "13D"},
        {estado: EstateEnum.OCUPADO, numero: "13E"},
        {estado: EstateEnum.DISPONIBLE, numero: "13F"},
        {estado: EstateEnum.DISPONIBLE, numero: "14A"},
        {estado: EstateEnum.OCUPADO, numero: "14B"},
        {estado: EstateEnum.DISPONIBLE, numero: "14C"},
        {estado: EstateEnum.DISPONIBLE, numero: "14D"},
        {estado: EstateEnum.OCUPADO, numero: "14E"},
        {estado: EstateEnum.DISPONIBLE, numero: "14F"},
        {estado: EstateEnum.DISPONIBLE, numero: "15A"},
        {estado: EstateEnum.OCUPADO, numero: "15B"},
        {estado: EstateEnum.DISPONIBLE, numero: "15C"},
        {estado: EstateEnum.DISPONIBLE, numero: "15D"},
        {estado: EstateEnum.OCUPADO, numero: "15E"},
        {estado: EstateEnum.DISPONIBLE, numero: "15F"},


    ];

    // get letrasUnicas(): string[] {
    //     return [...new Set(this.asientos.map(asiento => asiento.numero.charAt(1)))];
    // }
    //
    // obtenerAsientosPorLetra(letra: string) {
    //     return this.asientos.filter(asiento => asiento.numero.charAt(1) === letra);
    // }

    get letrasUnicas(): string[] {
        return [...new Set(this.asientos.map(asiento => (parseInt(asiento.numero) >= 10) ? asiento.numero.charAt(2) : asiento.numero.charAt(1)))];
    }

    obtenerAsientosPorLetra(letra: string) {
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
