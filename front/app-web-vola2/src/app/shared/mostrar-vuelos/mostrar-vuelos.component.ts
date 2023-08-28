import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vuelo } from '../../models/vuelo.model';
import { VuelosService } from '../../services/vuelos.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-mostrar-vuelos',
  templateUrl: './mostrar-vuelos.component.html',
  styleUrls: ['./mostrar-vuelos.component.scss']
})
export class MostrarVuelosComponent implements OnInit, OnDestroy {
  private vuelosSub: Subscription | undefined;
  vuelos: Vuelo[] = [];
  vuelosDeRegreso: Vuelo[] = [];
  vueloSeleccionado: Vuelo | null = null;
  datosBusqueda: any = {};
  idaSeleccionada: boolean = false;
  vueloRegresoSeleccionado: Vuelo | null = null;
  completo: boolean = false;

  constructor(private backendService: VuelosService, private router: Router) {
    // Carga los vuelos iniciales (si existen)
    this.vuelos = this.backendService.verificarvuelo();
    // Carga los datos de búsqueda desde sessionStorage
    const datosGuardados = sessionStorage.getItem('datosBusqueda');
    if (datosGuardados) {
      this.datosBusqueda = JSON.parse(datosGuardados);
    }
  }

  ngOnInit() {
    this.vuelosSub = this.backendService.getVuelosActualizadosListener()
      .subscribe(
        (vuelos: Vuelo[]) => {
          this.vuelos = vuelos;
        },
        (error) => {
          this.vuelos = [];
          console.error('Error al buscar vuelos:', error);
        }
      );
  }

  personalizarVuelo(vuelo: Vuelo) {
    this.vueloSeleccionado = vuelo;

    const datosVuelo = {
      fechaSalida: vuelo.fechaSalida,
      origen: vuelo.origen,
      destino: vuelo.destino
    };
    sessionStorage.setItem('datosVueloSeleccionado', JSON.stringify(datosVuelo));

    // Cargar vuelos de regreso
    this.backendService.buscarVuelosDeRegreso(
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
    this.idaSeleccionada = true;
    this.verificarCompleto(); 
  }

  personalizarVueloRegreso(vuelo: Vuelo) {
    this.vueloRegresoSeleccionado = vuelo;
    this.verificarCompleto();
    console.log("completo",this.completo);
  }

  
  ngOnDestroy() {
    if (this.vuelosSub) {
      this.vuelosSub.unsubscribe();
    }
  }


  // Verificar vuelo completo

  verificarCompleto() {
    if (this.vueloSeleccionado && this.vueloRegresoSeleccionado) {
      this.completo = true;
    }


}

continuar() {
  // Aquí puedes agregar el código para navegar a otra página o realizar otras acciones
  this.router.navigate(['/personalizacion']);
}

}

