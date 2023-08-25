import { Component, Input } from '@angular/core';
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
  @Input() control: FormControl; 
  constructor() {
    this.generateDates();
    this.control = new FormControl();
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
    this.previousDates = [];
    this.nextDates = [];
    this.generateDates();
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
}
