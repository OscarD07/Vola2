import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-opciones-fechas',
  templateUrl: './opciones-fechas.component.html',
  styleUrls: ['./opciones-fechas.component.scss']
})
export class OpcionesFechasComponent {
  @Input() control: FormControl; 

  constructor() { 
    this.control = new FormControl();
  }

}
