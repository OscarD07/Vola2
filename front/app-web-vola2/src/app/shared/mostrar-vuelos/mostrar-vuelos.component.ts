import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from '../../models/vuelo.model';
import { VuelosService } from '../../services/vuelos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mostrar-vuelos',
  templateUrl: './mostrar-vuelos.component.html',
  styleUrls: ['./mostrar-vuelos.component.scss']
})
export class MostrarVuelosComponent implements OnInit, OnDestroy {
  private vuelosSubscription: Subscription | undefined;
  vuelos: Vuelo[] = [];
  vuelosDeRegreso: Vuelo[] = [];
  vueloIdaSeleccionado: Vuelo | null = null;
  vueloRegresoSeleccionado: Vuelo | null = null;
  datosBusqueda: any = {};
  idaSeleccionada: boolean = false;
  reservaCompleta: boolean = false;
  vuelosSeleccionados: Vuelo[] = [];
  soloIda!: boolean;
  constructor(private vuelosService: VuelosService, private router: Router) {
    this.inicializarVuelosYBusqueda();
  }

  ngOnInit() {
    this.inicializarSuscripcionAVuelos();
  }

  ngOnDestroy() {
    this.cancelarSuscripcionAVuelos();
  }

  inicializarVuelosYBusqueda() {
    this.vuelos = this.vuelosService.verificarvuelo();
    const datosGuardados = sessionStorage.getItem('datosBusqueda');
    
    if (datosGuardados) {
      this.datosBusqueda = JSON.parse(datosGuardados);
    }
    this.soloIda=this.datosBusqueda.soloIda;
    console.log("soloIda?", this.soloIda)
  }

  inicializarSuscripcionAVuelos() {
    this.vuelosSubscription = this.vuelosService.getVuelosActualizadosListener()
      .subscribe(
        (vuelos: Vuelo[]) => { this.vuelos = vuelos; },
        (error) => {
          this.vuelos = [];
          console.error('Error al buscar vuelos:', error);
        }
      );
  }

  cancelarSuscripcionAVuelos() {
    if (this.vuelosSubscription) {
      this.vuelosSubscription.unsubscribe();
    }
  }

  seleccionarVueloIda(vuelo: Vuelo) {
    this.vueloIdaSeleccionado = vuelo;
    this.vuelosSeleccionados[0] = vuelo;
    this.actualizarVuelosEnSessionStorage();
    this.idaSeleccionada = true;
    this.vuelosService.buscarVuelosDeRegreso(
      vuelo.destino,
      vuelo.origen,
      this.datosBusqueda.fechaVuelta,
      this.datosBusqueda.numPasajeros
    ).subscribe(
      (data) => {
        this.vuelosDeRegreso = data.vuelos;
      },
      (error) => {
        this.vuelosDeRegreso = [];
        console.error('Error al buscar vuelos de regreso:', error);
      }
    );
    this.verificarReservaCompleta();
  }

  seleccionarVueloRegreso(vuelo: Vuelo) {
    
    this.vueloRegresoSeleccionado = vuelo;
    this.vuelosSeleccionados[1] = vuelo;
    this.actualizarVuelosEnSessionStorage();
    this.verificarReservaCompleta();


  }

  verificarReservaCompleta() {
    if (this.vueloIdaSeleccionado && this.vueloRegresoSeleccionado || this.vueloIdaSeleccionado && this.soloIda) {
      this.reservaCompleta = true;
    }
  }

  continuarConPersonalizacion() {
    this.router.navigate(['/pasajeros']);
  }

  actualizarVuelosEnSessionStorage() {
    const vuelosSeleccionadosJSON = JSON.stringify(this.vuelosSeleccionados);
    sessionStorage.setItem('vuelosSeleccionados', vuelosSeleccionadosJSON);
  }
}
