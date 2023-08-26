import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-opciones-fechas',
  templateUrl: './opciones-fechas.component.html',
  styleUrls: ['./opciones-fechas.component.scss']
})
export class OpcionesFechasComponent {
  minDate: Date = new Date();
  @Input() control: FormControl; 

  constructor() { 
    this.minDate.setDate(this.minDate.getDate() + 1);
    this.control = new FormControl();
  }

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    console.log(selectedDate);
    this.control.setValue(selectedDate);
  }

}
