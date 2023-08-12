import { Component } from '@angular/core';

interface Pais {
  nombrePais: string;
  codigoPais: string;
}

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.scss']
})
export class PasajerosComponent {
  paises: Pais[] = [
    { nombrePais: "Ecuador", codigoPais: "+593" },
    { nombrePais: "Estados Unidos", codigoPais: "+1" },
    { nombrePais: "Canadá", codigoPais: "+1" },
    { nombrePais: "Reino Unido", codigoPais: "+44" },
    { nombrePais: "Australia", codigoPais: "+61" },
    { nombrePais: "India", codigoPais: "+91" },
    // Agrega más países según sea necesario
  ];

  cantidadPasajeros: number = 1;
  pasajeros: any[] = [];

  generarFormularios() {
    this.pasajeros = [];
    for (let i = 1; i <= this.cantidadPasajeros; i++) {
      this.pasajeros.push({
        nombre: '',
        apellido: '',
        correo: '',
        codigo: '',
        telefono: ''
      });
    }
  }

  guardarYContinuar() {
    console.log(this.pasajeros); // Datos de los pasajeros guardados en el array

    // Puedes realizar otras acciones con los datos aquí
  }
}
