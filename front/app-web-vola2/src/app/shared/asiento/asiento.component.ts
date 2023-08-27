import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EstateEnum} from '../../enums/estate.enum';
import {SeleccionAsientoService} from '../../services/seleccion-asiento.service';

@Component({
    selector: 'app-asiento',
    templateUrl: './asiento.component.html',
    styleUrls: ['./asiento.component.scss']
})
export class AsientoComponent {
    @Input() estado: EstateEnum = EstateEnum.DISPONIBLE;
    @Input() seleccionado: boolean = false;
    @Input() numero: string = '';
    @Output() seleccionadoChange = new EventEmitter<boolean>();
    EstateEnum = EstateEnum;
    private datosBusqueda: any;


    constructor(private seleccionAsientoService: SeleccionAsientoService) {
    }

    ngOnInit(): void {
        this.cargarDatosDeSesion();
    }


    toggleSeleccion() {
        let maxAsientosSeleccionados = this.datosBusqueda.numPasajeros; // Puedes ajustar este valor según tus necesidades
        let cantidadAsientosSeleccionados = this.seleccionAsientoService.obtenerCantidadSeleccionados();
        if (this.estado === EstateEnum.DISPONIBLE) {
            if (cantidadAsientosSeleccionados < maxAsientosSeleccionados) {
                this.cambiarEstado(EstateEnum.SELECCIONADO, true);
            }
        } else if (this.estado === EstateEnum.SELECCIONADO) {
            if (cantidadAsientosSeleccionados <= maxAsientosSeleccionados) {
                this.cambiarEstado(EstateEnum.DISPONIBLE, false);
            } else if (cantidadAsientosSeleccionados === maxAsientosSeleccionados) {
                this.cambiarEstado(EstateEnum.DISPONIBLE, false);
            }
        }

        if (this.estado === EstateEnum.OCUPADO) {
            alert('El asiento ya está reservado');
        }
    }

    private cambiarEstado(estado: EstateEnum, incrementar: boolean) {
        this.seleccionado = !this.seleccionado;
        this.seleccionadoChange.emit(this.seleccionado);
        this.estado = estado;
        incrementar ? this.seleccionAsientoService.incrementarSeleccionados() : this.seleccionAsientoService.decrementarSeleccionados();
    }

    private cargarDatosDeSesion(): void {
        const datosGuardados = sessionStorage.getItem('datosBusqueda');
        if (datosGuardados) {
            this.datosBusqueda = JSON.parse(datosGuardados);
        }
    }

}
