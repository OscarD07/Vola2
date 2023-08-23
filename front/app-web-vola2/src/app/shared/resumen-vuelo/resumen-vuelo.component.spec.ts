import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenVueloComponent } from './resumen-vuelo.component';

describe('ResumenVueloComponent', () => {
  let component: ResumenVueloComponent;
  let fixture: ComponentFixture<ResumenVueloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumenVueloComponent]
    });
    fixture = TestBed.createComponent(ResumenVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
