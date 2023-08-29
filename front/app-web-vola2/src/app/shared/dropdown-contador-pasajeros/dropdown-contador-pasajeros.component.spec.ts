import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownContadorPasajerosComponent } from './dropdown-contador-pasajeros.component';

describe('DropdownContadorPasajerosComponent', () => {
  let component: DropdownContadorPasajerosComponent;
  let fixture: ComponentFixture<DropdownContadorPasajerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownContadorPasajerosComponent]
    });
    fixture = TestBed.createComponent(DropdownContadorPasajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
