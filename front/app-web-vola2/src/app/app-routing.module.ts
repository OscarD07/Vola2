import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FormularioBvComponent } from './formulario-bv/formulario-bv.component';
import { PasajerosComponent } from './pasajeros/pasajeros.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'vuelos', component:VuelosComponent},
  {path:'destinos', component:DestinosComponent},
  {path:'ofertas', component:OfertasComponent},
  {path:'formularioBv', component:FormularioBvComponent},
  {path:'pasajeros', component:PasajerosComponent},
  {path:'**', component:HomeComponent}//ruta 404 no se carga el componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
