import {Component, Input, OnInit, SimpleChanges, OnChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {VuelosService} from '../../services/vuelos.service';
import { validarFechas } from '../../validators/app-validators'
@Component({
    selector: 'app-formulario-ev',
    templateUrl: './formulario-ev.component.html',
    styleUrls: ['./formulario-ev.component.scss']
})
export class FormularioEvComponent implements OnInit, OnChanges {
    @Input() orientacion: 'vertical' | 'horizontal' = 'vertical';
    form!: FormGroup;
    datosBusqueda: any = {};
    showError: boolean = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private backendService: VuelosService
    ) {
    }

    ngOnInit(): void {
        this.cargarDatosDeSesion();
        this.inicializarFormulario();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('orientacion' in changes) {
            this.cargarDatosDeSesion();
        }
    }

    private cargarDatosDeSesion(): void {
        const datosGuardados = sessionStorage.getItem('datosBusqueda');
        if (datosGuardados) {
            this.datosBusqueda = JSON.parse(datosGuardados);
        }
    }

    private inicializarFormulario(): void {
        this.form = this.fb.group({
            origen: [this.datosBusqueda.origen, Validators.required],
            destino: [this.datosBusqueda.destino, Validators.required],
            fechaSalida: [new Date(this.datosBusqueda.fechaSalida), Validators.required],
            fechaVuelta: [new Date(this.datosBusqueda.fechaVuelta), Validators.required],
            numPasajeros: [this.datosBusqueda.adulto + this.datosBusqueda.ninosControl + this.datosBusqueda.adultoMayor || 1, [Validators.required, Validators.min(1)]],
            soloIda: [this.datosBusqueda.soloIda, Validators.required],
            adulto: [this.datosBusqueda.adulto, [Validators.required, Validators.min(0)]], // nuevo
            niños: [this.datosBusqueda.niños, [Validators.required, Validators.min(0)]], // nuevo
            adultoMayor: [this.datosBusqueda.adultoMayor, [Validators.required, Validators.min(0)]] // nuevo
        }, { validators: validarFechas });
    }

    sumarPasajeros(): void {

    }

    


    guardarCambiosYBuscarVuelos(): void {
        this.datosBusqueda = this.form.value;
        this.datosBusqueda.numPasajeros = this.datosBusqueda.adulto + this.datosBusqueda.niños + this.datosBusqueda.adultoMayor
        console.log(this.datosBusqueda);
        sessionStorage.setItem('datosBusqueda', JSON.stringify(this.datosBusqueda));
        this.buscarVuelos();
        if (this.orientacion === 'vertical') {
            this.router.navigate(['/vuelos']);
        }
    }


    buscarVuelos(): void {
        this.showError = true;
        this.backendService
            .buscarVueloDatos(
                this.datosBusqueda.origen,
                this.datosBusqueda.destino,
                this.datosBusqueda.fechaSalida,
                this.datosBusqueda.numPasajeros
            )
            .subscribe(
                (data) => {
                    this.backendService.vuelos = data.vuelos;
                    this.backendService.verificarvuelo();
                    // Procesar los datos recibidos del backend
                },
                (error) => {
                    this.backendService.vuelos = [];
                    this.backendService.verificarvuelo();
                    console.error('Error al buscar vuelos:', error);
                }
            );
    }

    // Getters para los controles del formulario
    get origenControl(): FormControl {
        return this.form.get('origen') as FormControl;
    }

    get destinoControl(): FormControl {
        return this.form.get('destino') as FormControl;
    }

    get fechaSalidaControl(): FormControl {
        return this.form.get('fechaSalida') as FormControl;
    }

    get fechaVueltaControl(): FormControl {
        return this.form.get('fechaVuelta') as FormControl;
    }

    get numPasajerosControl(): FormControl {
        return this.form.get('numPasajeros') as FormControl;
    }

    get soloIdaControl(): FormControl {
        return this.form.get('soloIda') as FormControl;
    }

    get adultoControl(): FormControl {
        return this.form.get('adulto') as FormControl;
    }

    get ninosControl(): FormControl {
        return this.form.get('niños') as FormControl;
    }

    get adultoMayorControl(): FormControl {
        return this.form.get('adultoMayor') as FormControl;
    }
}
