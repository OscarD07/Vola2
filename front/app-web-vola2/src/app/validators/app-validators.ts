import { FormGroup, ValidationErrors } from '@angular/forms';


export function validarFechas(group: FormGroup) {
    const fechaSalida = new Date(group.get('fechaSalida')?.value);
    const fechaVuelta = new Date(group.get('fechaVuelta')?.value);
    const soloIda = group.get('soloIda')?.value;
  
    if (soloIda) {
      return null; // No hay errores si es "Solo Ida"
    }
  
    // Comprobar las fechas solo si no es "Solo Ida"
    if (fechaSalida && fechaVuelta && fechaVuelta < fechaSalida) {
        return { 'fechaInvalida': true };
    }
  
    return null;
  }