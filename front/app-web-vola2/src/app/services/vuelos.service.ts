import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Vuelo} from '../models/vuelo.model';

@Injectable({
    providedIn: 'root',
})
export class VuelosService {
    private url: string;
    vuelos: Vuelo[] = [];
    private vuelosActualizados = new Subject<Vuelo[]>();
     vuelosRegreso: Vuelo[] = [];
     vuelosActualizadosRegreso = new Subject<Vuelo[]>();
    constructor(private _http: HttpClient) {
        this.url = 'http://127.0.0.1:3600/vola2';
    }

    private getHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }

    buscarVueloDatos(
        origen: string,
        destino: string,
        fechaSalida: string,
        numPasajeros: string
    ): Observable<any> {
        const url = `${this.url}/get-vuelos-buscar/${origen}/${destino}/${fechaSalida}/${numPasajeros}`;
        return this._http.get(url, {headers:this.getHeaders()});

    }

    verificarvuelo(): Vuelo[] {
        this.vuelosActualizados.next([...this.vuelos]);
        return this.vuelos;
    }

    verificarvueloRegreso(): Vuelo[] {
        this.vuelosActualizadosRegreso.next([...this.vuelosRegreso]);
        return this.vuelosRegreso;
    }
    getVuelosRegresoActualizadosListener(): Observable<Vuelo[]> {
        return this.vuelosActualizadosRegreso.asObservable();
    }

    getVuelosRegreso(): Vuelo[] {
        return [...this.vuelosRegreso];
    }

    getVuelosActualizadosListener(): Observable<Vuelo[]> {
        return this.vuelosActualizados.asObservable();
    }

    buscarVuelos(): Observable<any> {
        return this._http.get(this.url, {headers: this.getHeaders()});
    }

    getVuelos(): Vuelo[] {
        return [...this.vuelos];
    }

    // Añadir este método en tu VuelosService
    buscarVuelosDeRegreso(
        origen: string,
        destino: string,
        fechaSalida: string,
        numPasajeros: string
    ): Observable<any> {
        const url = `${this.url}/get-vuelos-buscar/${origen}/${destino}/${fechaSalida}/${numPasajeros}`;
        return this._http.get(url, {headers:this.getHeaders()});
    }

    solicitarLinkPago(
        orderAmount: number
    ): Observable<any> {
        const url = `http://127.0.0.1:3600/create-order/${orderAmount}`;
        return this._http.get(url, {headers:this.getHeaders()});
    }


}
