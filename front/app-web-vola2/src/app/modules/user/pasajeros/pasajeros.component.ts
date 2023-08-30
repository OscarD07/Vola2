import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

    constructor(private fb: FormBuilder, private router: Router) { }

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
                firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                birthdate: ['', [Validators.required, this.ageValidator(11, 55)]],
                nui: ['', [Validators.required, Validators.pattern('^[0-9]*$'), validateEcuadorianId]]
            }));
        }
        for (let i = 1; i <= seniorsCount; i++) {
            this.seniors.push(`Adulto Mayor ${i}`);
            this.seniorForms.push(this.fb.group({
                firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                birthdate: ['', [Validators.required, this.ageValidator(55, null)]],
                nui: ['', [Validators.required, Validators.pattern('^[0-9]*$'), validateEcuadorianId]]
            }));
        }
        for (let i = 1; i <= childrenCount; i++) {
            this.children.push(`Niño ${i}`);
            this.childForms.push(this.fb.group({
                firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
                birthdate: ['', [Validators.required, this.ageValidator(2, 10)]],
                nui: ['', [Validators.required, Validators.pattern('^[0-9]*$'), validateEcuadorianId]]
            }));
        }
    }

    ageValidator(minAge: number | null, maxAge: number | null): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const birthdate = control.value;
            const today = new Date();
            const birthYear = new Date(birthdate).getFullYear();
            const currentYear = today.getFullYear();
            const age = currentYear - birthYear;

            if ((minAge !== null && age < minAge) || (maxAge !== null && age > maxAge)) {
                return { invalidAge: true };
            }

            return null;
        };
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

    private areFormsValid(formGroups: FormGroup[]): boolean {
        return formGroups.every(formGroup => formGroup.valid);
    }

    continuarConPersonalizacion() {
        if (this.areFormsValid([...this.adultForms, ...this.seniorForms, ...this.childForms])) {
            this.router.navigate(['/personalizacion']);
        } else {
            alert('Complete todos los campos correctamente antes de continuar');
        }
    }

    continuarSinLaPersonalizacion() {
        if (this.areFormsValid([...this.adultForms, ...this.seniorForms, ...this.childForms])) {
            this.router.navigate(['/carrito']);
        } else {
            alert('Complete todos los campos correctamente antes de continuar');
        }
    }
}

function validateEcuadorianId(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
        return null;
    }

    const cedulaRegex = /^[0-9]{10}$/;
    if (!cedulaRegex.test(value)) {
        return { invalidCedula: true };
    }

    const provinceCode = Number(value.substr(0, 2));
    if (provinceCode < 1 || provinceCode > 24) {
        return { invalidCedula: true };
    }

    const thirdDigit = Number(value[2]);
    if (thirdDigit < 0 || thirdDigit > 6) {
        return { invalidCedula: true };
    }

    const verifierDigit = Number(value[9]);
    const sum = value.substr(0, 9).split('').map(Number).reduce((acc: number, digit: number, index: number) => {
        const mult = (index % 2 === 0) ? 2 : 1;
        let temp = digit * mult;
        if (temp > 9) {
            temp -= 9;
        }
        return acc + temp;
    }, 0);

    const calculatedVerifierDigit = 10 - (sum % 10);
    if ((calculatedVerifierDigit !== 10 && verifierDigit !== calculatedVerifierDigit) ||
        (calculatedVerifierDigit === 10 && verifierDigit !== 0)) {
        return { invalidCedula: true };
    }

    return null;
}
