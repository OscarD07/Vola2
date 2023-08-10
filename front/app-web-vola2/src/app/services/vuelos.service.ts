import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Vuelo {
  _id: string;
  origen: string;
  destino: string;
  fechaSalida: string;
  numPasajeros: number;
}
@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = 'http://127.0.0.1:3600/vola2';
  }

  buscarVuelos(): Observable<any> {
    return this._http.get(this.url);
  }

  buscarVueloDatos(
    origen: string,
    destino: string,
    fechaSalida: string,
    numPasajeros: number
  ): Observable<any> {
    const url = `${this.url}/get-vuelos-buscar/${origen}/${destino}/${fechaSalida}/${numPasajeros}`;
    return this._http.get(url);
  }
}
