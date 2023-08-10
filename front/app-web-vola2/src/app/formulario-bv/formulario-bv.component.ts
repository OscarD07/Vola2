import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//

interface Ciudad {
  nombreCiudad: string;
  codigoCiudad: string;
  nombreAeropuerto: string;
  highlightedNombre?: boolean;
}
@Component({
  selector: 'app-formulario-bv',
  templateUrl: './formulario-bv.component.html',
  styleUrls: ['./formulario-bv.component.scss']
})
export class FormularioBvComponent {
 
  flightForm: FormGroup;
  selectedForm: string | null = 'solo-ida';
  showError: boolean = false; // Variable para mostrar el mensaje de error
  ciudades:Ciudad[] = [
    { nombreCiudad: "Quito", codigoCiudad: "UIO", nombreAeropuerto: "Aeropuerto Internacional Mariscal Sucre" },
    { nombreCiudad: "Guayaquil", codigoCiudad: "GYE", nombreAeropuerto: "Aeropuerto Internacional José Joaquín de Olmedo" },
    { nombreCiudad: "Cuenca", codigoCiudad: "CUE", nombreAeropuerto: "Aeropuerto Mariscal Lamar" },
    { nombreCiudad: "Manta", codigoCiudad: "MEC", nombreAeropuerto: "Aeropuerto Internacional Eloy Alfaro" },
    { nombreCiudad: "Latacunga", codigoCiudad: "LTX", nombreAeropuerto: "Aeropuerto Cotopaxi" },
    { nombreCiudad: "Tulcán", codigoCiudad: "TUA", nombreAeropuerto: "Aeropuerto Internacional Teniente Coronel Luis A. Mantilla" },
    { nombreCiudad: "Loja", codigoCiudad: "LOH", nombreAeropuerto: "Aeropuerto Ciudad de Catamayo" },
    { nombreCiudad: "Esmeraldas", codigoCiudad: "ESM", nombreAeropuerto: "Aeropuerto Internacional Carlos Concha Torres" },
    { nombreCiudad: "Salinas", codigoCiudad: "SNC", nombreAeropuerto: "Aeropuerto General Ulpiano Paez" },
    { nombreCiudad: "Santa Rosa", codigoCiudad: "ETR", nombreAeropuerto: "Aeropuerto Regional de Santa Rosa" },
    { nombreCiudad: "Coca", codigoCiudad: "OCC", nombreAeropuerto: "Aeropuerto Francisco de Orellana" },
    { nombreCiudad: "Nueva Loja", codigoCiudad: "LGQ", nombreAeropuerto: "Aeropuerto Internacional Reina Mariana" },
    { nombreCiudad: "Macas", codigoCiudad: "XMS", nombreAeropuerto: "Aeropuerto Coronel Eloy Alfaro" },
    { nombreCiudad: "Taisha", codigoCiudad: "TSC", nombreAeropuerto: "Aeropuerto de Taisha" },
    { nombreCiudad: "Tena", codigoCiudad: "TNW", nombreAeropuerto: "Aeropuerto Jumandy" },
    { nombreCiudad: "San Cristóbal", codigoCiudad: "SCY", nombreAeropuerto: "Aeropuerto de San Cristóbal" },
    { nombreCiudad: "Baltra", codigoCiudad: "GPS", nombreAeropuerto: "Aeropuerto Seymour de Baltra" },
    { nombreCiudad: "Puerto Baquerizo Moreno", codigoCiudad: "PBH", nombreAeropuerto: "Aeropuerto Nueva Loja" },
    { nombreCiudad: "Tiputini", codigoCiudad: "TPN", nombreAeropuerto: "Aeropuerto de Tiputini" },
    { nombreCiudad: "Shell", codigoCiudad: "PTZ", nombreAeropuerto: "Aeropuerto Rio Amazonas" },
    { nombreCiudad: "Pastaza", codigoCiudad: "PYO", nombreAeropuerto: "Aeropuerto de Pastaza" }
    // Agrega más ciudades aquí
  ];
  filteredCiudadesDestino: Ciudad[] = [];
filteredCiudadesOrigen: Ciudad[] = [];

  isOrigenInputEmpty: boolean = true;
  isDestinoInputEmpty: boolean = true;
  constructor(private router: Router, private fb: FormBuilder){
    this.flightForm = this.fb.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      fechaRegreso: [''],
      numPasajeros: [1, [Validators.required, Validators.min(1)]]
    });
  }
  
  buscarVuelo() {
    this.showError = true; // Mostrar el mensaje de error
    if (this.flightForm.invalid) {
    return; 
    }

    const datosBusqueda = {
      origen: this.flightForm.value.origen,
      destino: this.flightForm.value.destino,
      fechaSalida: this.flightForm.value.fechaSalida,
      numPasajeros: this.flightForm.value.numPasajeros
    };

    sessionStorage.setItem('datosBusqueda', JSON.stringify(datosBusqueda));
    this.router.navigate(['/vuelos']);
  }

filterCiudades(event: any, isDestino: boolean) {
  const value = event.target.value.toLowerCase();
  const ciudadesList = isDestino ? this.ciudades : this.ciudades;

  if (value) {
    const searchTerm = value.toLowerCase();
    const filteredCiudades = ciudadesList.filter(ciudad =>
      ciudad.nombreCiudad.toLowerCase().includes(searchTerm) ||
      ciudad.codigoCiudad.toLowerCase().includes(searchTerm) ||
      ciudad.nombreAeropuerto.toLowerCase().includes(searchTerm)
    );

    if (isDestino) {
      this.filteredCiudadesDestino = filteredCiudades.map(ciudad => ({
        ...ciudad,
        highlightedNombre: false
      }));
    } else {
      this.filteredCiudadesOrigen = filteredCiudades.map(ciudad => ({
        ...ciudad,
        highlightedNombre: false
      }));
    }
  } else {
    if (isDestino) {
      this.filteredCiudadesDestino = [];
    } else {
      this.filteredCiudadesOrigen = [];
    }
  }
}

seleccionarCiudad(ciudad: Ciudad, campo: string) {
  this.flightForm.controls[campo].setValue(ciudad.nombreCiudad);
  if (campo === 'origen') {
    this.filteredCiudadesOrigen = [];
  } else {
    this.filteredCiudadesDestino = [];
  }
}
}

