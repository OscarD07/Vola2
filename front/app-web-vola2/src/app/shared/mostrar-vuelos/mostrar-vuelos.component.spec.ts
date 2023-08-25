import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVuelosComponent } from './mostrar-vuelos.component';

describe('MostrarVuelosComponent', () => {
  let component: MostrarVuelosComponent;
  let fixture: ComponentFixture<MostrarVuelosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarVuelosComponent]
    });
    fixture = TestBed.createComponent(MostrarVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
