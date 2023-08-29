import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.component.html',
  styleUrls: ['./pasajeros.component.scss']
})
export class PasajerosComponent {
  adults: any[] = [];
  seniors: any[] = [];
  children: any[] = [];
  adultForms: FormGroup[] = [];
  seniorForms: FormGroup[] = [];
  childForms: FormGroup[] = [];
  datosBusqueda: any = {};
  currentName = 'PERSONA';
  currentTab = 'Adulto 1';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    const datosGuardados = sessionStorage.getItem('datosBusqueda');
    if (datosGuardados) {
      this.datosBusqueda = JSON.parse(datosGuardados);
    }

    const adultsCount = +this.datosBusqueda.adulto || 0;
    const seniorsCount = +this.datosBusqueda.adultoMayor || 0;
    const childrenCount = +this.datosBusqueda.niños || 0;

    for (let i = 1; i <= adultsCount; i++) {
      this.adults.push(`Adulto ${i}`);
      this.adultForms.push(this.fb.group({
        firstName: [''],
        lastName: ['']
      }));
    }
    for (let i = 1; i <= seniorsCount; i++) {
      this.seniors.push(`Adulto Mayor ${i}`);
      this.seniorForms.push(this.fb.group({
        firstName: [''],
        lastName: [''],
        birthdate: ['']
      }));
    }
    for (let i = 1; i <= childrenCount; i++) {
      this.children.push(`Niño ${i}`);
      this.childForms.push(this.fb.group({
        firstName: [''],
        lastName: [''],
        birthdate: ['']
      }));
    }
  }

  changeTab(event: MatTabChangeEvent): void {
    this.currentTab = event.tab.textLabel;
    this.loadCurrentName();
  }

  updateCurrentName(formGroup: FormGroup): void {
    const firstName = formGroup.get('firstName')?.value || '';
  const lastName = formGroup.get('lastName')?.value || '';
  if (firstName || lastName) {
    this.currentName = `${firstName} ${lastName}`;
  } else {
    this.currentName = 'PASAJERO';
  }
  }

  loadCurrentName(): void {
    let formGroup: FormGroup | undefined;
    if (this.currentTab.startsWith('Adulto ')) {
      const index = +this.currentTab.split(' ')[1] - 1;
      formGroup = this.adultForms[index];
    } else if (this.currentTab.startsWith('Adulto Mayor ')) {
      const index = +this.currentTab.split(' ')[2] - 1;
      formGroup = this.seniorForms[index];
    } else if (this.currentTab.startsWith('Niño ')) {
      const index = +this.currentTab.split(' ')[1] - 1;
      formGroup = this.childForms[index];
    }
    if (formGroup) {
      this.updateCurrentName(formGroup);
    } else {
      this.currentName = 'PASAJERO';
    }
  }

  continuarConPersonalizacion(){
    this.router.navigate(['/personalizacion'])
  }
}
