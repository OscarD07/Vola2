import { Component } from '@angular/core';
import { Vuelo } from '../../models/vuelo.model';

@Component({
  selector: 'app-mostrar-vuelos',
  templateUrl: './mostrar-vuelos.component.html',
  styleUrls: ['./mostrar-vuelos.component.scss']
})
export class MostrarVuelosComponent {
  vuelos: Vuelo[] = [];
}
