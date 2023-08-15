import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public titulo:string;
  
  constructor(){
    this.titulo="Es tiempo de viajar por el Ecuador";
  }
  
  
}
