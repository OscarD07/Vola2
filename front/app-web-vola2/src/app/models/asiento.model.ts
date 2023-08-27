import {EstateEnum} from "../enums/estate.enum";

export interface Asiento {
    estado: EstateEnum;
    numero: string;
}

export interface AsientoConSeleccion extends Asiento {
    seleccionado: boolean;
}
