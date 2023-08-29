import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTarifaComponent } from './seleccion-tarifa.component';

describe('SeleccionTarifaComponent', () => {
  let component: SeleccionTarifaComponent;
  let fixture: ComponentFixture<SeleccionTarifaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeleccionTarifaComponent]
    });
    fixture = TestBed.createComponent(SeleccionTarifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
