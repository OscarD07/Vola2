import { Component, Input, OnInit } from '@angular/core';
import { Vuelo } from '../../models/vuelo.model';

@Component({
  selector: 'app-card-resumen-vuelo',
  templateUrl: './card-resumen-vuelo.component.html',
  styleUrls: ['./card-resumen-vuelo.component.scss']
})
export class CardResumenVueloComponent implements OnInit {
  @Input() vuelo: Vuelo | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
