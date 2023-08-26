import {Component} from '@angular/core';
import {CIUDADES_DATA} from "../../../../../constants/ciudades.const";
import {Ciudad} from "../../../../../models/ciudad.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-formulario-bv',
    templateUrl: './formulario-bv.component.html',
    styleUrls: ['./formulario-bv.component.scss']
})

export class FormularioBvComponent {
    flightForm: FormGroup;
    minDate: string;
    selectedForm: 'solo-ida' | 'ida-vuelta' = 'solo-ida';
    showError: boolean = false;
    ciudades: Ciudad[] = CIUDADES_DATA;
    filteredCiudadesDestino: Ciudad[] = [];
    filteredCiudadesOrigen: Ciudad[] = [];
    isOrigenInputEmpty: boolean = true;
    isDestinoInputEmpty: boolean = true;

    constructor(private router: Router, private fb: FormBuilder) {
        this.minDate = this.getCurrentDate();
        this.flightForm = this.fb.group({
            origen: ['', Validators.required],
            destino: ['', Validators.required],
            fechaSalida: ['', Validators.required],
            fechaRegreso: [''],
            numPasajeros: [1, [Validators.required, Validators.min(1)]],
        });
    }

    buscarVuelo() {
        this.showError = true;
        if (this.flightForm.invalid) {
            return;
        }

        const datosBusqueda = {
            origen: this.flightForm.value.origen,
            destino: this.flightForm.value.destino,
            fechaSalida: this.flightForm.value.fechaSalida,
            fechaRegreso: this.flightForm.value.fechaRegreso, // Añadido para ida y vuelta
            numPasajeros: this.flightForm.value.numPasajeros,
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

    getCurrentDate(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = (today.getDate() + 1).toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    highlightText(text: string, searchTerm: string): string {
        if (!searchTerm) {
            return text;
        }

        const pattern = new RegExp(searchTerm, 'gi');
        return text.replace(pattern, match => `<strong>${match}</strong>`);
    }
}
