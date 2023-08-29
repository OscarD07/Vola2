import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown-contador-pasajeros',
  templateUrl: './dropdown-contador-pasajeros.component.html',
  styleUrls: ['./dropdown-contador-pasajeros.component.scss']
})
export class DropdownContadorPasajerosComponent {
  @Input() adultoControl!: FormControl;
  @Input() ninosControl!: FormControl;
  @Input() adultoMayorControl!: FormControl;

  options = ['adulto', 'niños', 'adulto mayor'];
  selectedOption = 'Pasajeros';
  maxPasajeros = 9;
  constructor() {}

  increment(option: string): void {
    const totalPasajeros = this.sumaPasajeros();
    if (totalPasajeros < this.maxPasajeros) {
      const control = this.getControl(option);
      if (control) {
        control.setValue(control.value + 1);
      }
    }
  }
  sumaPasajeros(): number {
    return (this.getControl('adulto')?.value || 0) +
           (this.getControl('niños')?.value || 0) +
           (this.getControl('adulto mayor')?.value || 0);
  }
  decrement(option: string): void {
    const control = this.getControl(option);
    if (control && control.value > 0) {
      control.setValue(control.value - 1);
    }
  }


  placeholderPasajeros(): string{
   
var cantidad = "Pasajeros: " + this.sumaPasajeros();
return (cantidad)
  }
   getControl(option: string): FormControl | null {
    switch (option) {
      case 'adulto':
        return this.adultoControl;
      case 'niños':
        return this.ninosControl;
      case 'adulto mayor':
        return this.adultoMayorControl;
      default:
        return null;
    }
  }
}
