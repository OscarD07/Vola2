import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-fechas-cercanas',
  templateUrl: './fechas-cercanas.component.html',
  styleUrls: ['./fechas-cercanas.component.scss']
})
export class FechasCercanasComponent {
  today: Date = new Date();
  selectedDate: Date = new Date(); // Puedes cambiar esto más tarde
  previousDates: Date[] = [];
  nextDates: Date[] = [];
  currentPage: number = 0;
  disablePrevButton: boolean = false;
  @Input() control: FormControl; 
  constructor() {
    this.generateDates();
    this.control = new FormControl();
  }

  ngOnInit() {
    // Escuchar los cambios en el control
    this.control.valueChanges.subscribe(date => {
      this.selectedDate = new Date(date);
      this.previousDates = [];
      this.nextDates = [];
      this.generateDates();
      // Aquí también puedes actualizar previousDates y nextDates
      // basado en el nuevo selectedDate si lo deseas.
    });

    // Establecer la fecha seleccionada inicial basada en el valor inicial del control
    if (this.control.value) {
      this.selectedDate = new Date(this.control.value);
    }

    this.checkIfShouldDisablePrevButton();
  }

  generateDates() {
    // Calcular fechas anteriores
    for (let i = 1; i <= 3; i++) {
      const prevDate = new Date(this.selectedDate);
      prevDate.setDate(this.selectedDate.getDate() - i);
      if (prevDate >= this.today) {
        this.previousDates.unshift(prevDate);
      }
    }

    // Calcular fechas futuras
    for (let i = 1; i <= 3; i++) {
      const nextDate = new Date(this.selectedDate);
      nextDate.setDate(this.selectedDate.getDate() + i);
      this.nextDates.push(nextDate);
    }
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.control.setValue(this.selectedDate);
    console.log(this.control.value);
    this.previousDates = [];
    this.nextDates = [];
    this.generateDates();
    this.checkIfShouldDisablePrevButton();
  }



  

  getFormattedDate(date: Date): string {
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    const day = dayNames[date.getDay()];
    return `${day}, ${date.getDate()} ${this.getMonthName(date.getMonth())}`;
  }
  
  getMonthName(month: number): string {
    const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return monthNames[month];
  }


  goToPreviousPage() {
    this.currentPage--;
    this.updateSelectedDate(-1);
    this.checkIfShouldDisablePrevButton();
  }
  
  goToNextPage() {
    this.currentPage++;
    this.updateSelectedDate(1);
    this.checkIfShouldDisablePrevButton();
  }
  
  updateSelectedDate(direction: number) {
    // Actualizar selectedDate basado en la dirección
    const newDate = new Date(this.selectedDate);
    newDate.setDate(this.selectedDate.getDate() + direction);
    this.selectedDate = newDate;
    
    // Actualizar el FormControl
    this.control.setValue(this.selectedDate);
  
    // Limpiar y regenerar las fechas
    this.previousDates = [];
    this.nextDates = [];
    this.generateDates();
  }

  checkIfShouldDisablePrevButton() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset time part to compare only dates
    this.disablePrevButton = this.selectedDate.getTime() <=  today.getTime();
    console.log(this.disablePrevButton);
  }
}
  
