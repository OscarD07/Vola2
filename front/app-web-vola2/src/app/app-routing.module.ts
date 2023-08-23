import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/user/home/home.component';
import { VuelosComponent } from './modules/user/vuelos/vuelos.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'vuelos', component:VuelosComponent},
  {path:'**', component:HomeComponent}//ruta 404 no se carga el componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
