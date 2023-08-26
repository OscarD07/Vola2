import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Vuelo } from '../models/vuelo.model';
@Injectable({
  providedIn: 'root',
})
export class VuelosService {
  private url: string;
  vuelos: Vuelo[] = [];
  private vuelosActualizados = new Subject<Vuelo[]>();
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
    numPasajeros: string
  ): Observable<any> {
    const url = `${this.url}/get-vuelos-buscar/${origen}/${destino}/${fechaSalida}/${numPasajeros}`;
    return this._http.get(url);
    
  }

  verificarvuelo(): Vuelo[]{
    this.vuelosActualizados.next([...this.vuelos]);
    return this.vuelos;
  }

  getVuelosActualizadosListener(): Observable<Vuelo[]> {
    return this.vuelosActualizados.asObservable();
  }

  getVuelos(): Vuelo[] {
    return [...this.vuelos];
  }
}