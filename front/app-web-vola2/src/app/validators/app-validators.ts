import { FormGroup, ValidationErrors } from '@angular/forms';

export function validarFechas(group: FormGroup): ValidationErrors | null {
  const fechaSalida = new Date(group.get('fechaSalida')?.value);
  const fechaVuelta = new Date(group.get('fechaVuelta')?.value);

  if (fechaVuelta < fechaSalida) {
    return { 'fechaInvalida': true };
  }
  return null;
}