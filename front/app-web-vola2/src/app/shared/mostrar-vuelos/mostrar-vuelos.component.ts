import {Component} from '@angular/core';
import {Vuelo} from '../../models/vuelo.model';
import {VuelosService} from 'src/app/services/vuelos.service';
import {Subscription} from 'rxjs';
import {Router} from "@angular/router";

@Component({
    selector: 'app-mostrar-vuelos',
    templateUrl: './mostrar-vuelos.component.html',
    styleUrls: ['./mostrar-vuelos.component.scss']
})
export class MostrarVuelosComponent {
    private vuelosSub: Subscription | undefined;
    vuelos: Vuelo[] = [];


    constructor(private backendService: VuelosService, private router: Router) {
        this.vuelos = this.backendService.verificarvuelo();
    }

    ngOnInit() {
        this.vuelosSub = this.backendService.getVuelosActualizadosListener()
            .subscribe((vuelos: Vuelo[]) => {
                this.vuelos = vuelos;
            }, (error) => {
                this.vuelos = [];
                console.error('Error al buscar vuelos:', error);
            });
    }

    personalizarVuelo() {
        this.router.navigate(['/personalizacion']);
    }
}
