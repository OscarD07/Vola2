import { Asiento } from './asiento.model';
export interface Vuelo {
    _id: string;
    origen: string;
    destino: string;
    fechaSalida: string; // ISO string de fecha y hora
    duracionMinutos: number;
    asientos: Asiento[]; // Array de objetos de tipo Asiento
    precio: number;
  }
  