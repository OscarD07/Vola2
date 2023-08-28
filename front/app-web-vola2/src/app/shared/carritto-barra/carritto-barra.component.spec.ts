import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrittoBarraComponent } from './carritto-barra.component';

describe('CarrittoBarraComponent', () => {
  let component: CarrittoBarraComponent;
  let fixture: ComponentFixture<CarrittoBarraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrittoBarraComponent]
    });
    fixture = TestBed.createComponent(CarrittoBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
