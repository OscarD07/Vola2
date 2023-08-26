import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

    constructor() {
    }

    ngOnInit(): void {
        this.slides[0] = {
            id: 0,
            src: '/assets/img/costa.webp',
            title: 'Región Costa - Playas del Pacífico',
            subtitle: 'Sumérgete en la serenidad de las playas de la Costa ecuatoriana, donde el sol se funde con la arena dorada y las olas danzan en armonía.'
        };
        this.slides[1] = {
            id: 1,
            src: './assets/img/sierra.webp',
            title: 'Región Sierra - Paisajes Andinos',
            subtitle: 'Descubre la majestuosidad de los paisajes andinos de Ecuador, donde las montañas se elevan hacia el cielo y los valles verdes se extienden hasta donde alcanza la vista.'
        };
        this.slides[2] = {
            id: 2,
            src: './assets/img/oriente.webp',
            title: 'Región Oriente - Selva Amazónica',
            subtitle: 'Adéntrate en la exuberante selva amazónica ecuatoriana, un mundo de biodiversidad y misterio donde la naturaleza reina en todo su esplendor.'
        };
        this.slides[3] = {
            id: 3,
            src: './assets/img/galapagos.webp',
            title: 'Región Insular - Islas Galápagos',
            subtitle: 'Explora el archipiélago de las Islas Galápagos, un paraíso único donde la vida silvestre y la naturaleza te transportarán a un mundo distinto en medio del océano.'
        };
    }

}
