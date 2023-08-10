import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs"; //para que la información solicitada se pueda mostrar

@Injectable({
  providedIn: 'root'
})
export class VuelosService {
  public url:string;
  constructor(
    public _http:HttpClient //publica porque necesito hacer peticiones
){
    this.url="/vola2/get-vuelos-buscar/:origen/:destino/:fecha_salida/:asientos_disponibles";
}
buscarVuelos(origen: string, destino: string, fechaSalida: string, asientosDisponibles: number): Observable<any> {
  const url = `${this._http}/get-vuelos-buscar/${origen}/${destino}/${fechaSalida}/${asientosDisponibles}`;
  return this._http.get(url);
}
}
