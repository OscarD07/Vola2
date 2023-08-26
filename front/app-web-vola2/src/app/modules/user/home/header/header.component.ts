import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    public titulo: string;

    constructor() {
        this.titulo = "Es tiempo de viajar por el Ecuador";
    }
}
