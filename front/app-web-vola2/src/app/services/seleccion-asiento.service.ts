import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SeleccionAsientoService {
    private asientosSeleccionados = new BehaviorSubject<number>(0);

    asientosSeleccionados$ = this.asientosSeleccionados.asObservable();

    incrementarSeleccionados() {
        this.asientosSeleccionados.next(this.asientosSeleccionados.value + 1);
    }

    decrementarSeleccionados() {
        this.asientosSeleccionados.next(this.asientosSeleccionados.value - 1);
    }

    obtenerCantidadSeleccionados() {
        return this.asientosSeleccionados.value;
    }
}
