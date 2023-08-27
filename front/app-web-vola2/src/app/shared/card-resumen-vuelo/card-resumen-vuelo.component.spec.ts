import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResumenVueloComponent } from './card-resumen-vuelo.component';

describe('CardResumenVueloComponent', () => {
  let component: CardResumenVueloComponent;
  let fixture: ComponentFixture<CardResumenVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardResumenVueloComponent]
    });
    fixture = TestBed.createComponent(CardResumenVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
