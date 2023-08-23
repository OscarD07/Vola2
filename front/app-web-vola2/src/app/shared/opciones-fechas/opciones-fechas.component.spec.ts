import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesFechasComponent } from './opciones-fechas.component';

describe('OpcionesFechasComponent', () => {
  let component: OpcionesFechasComponent;
  let fixture: ComponentFixture<OpcionesFechasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpcionesFechasComponent]
    });
    fixture = TestBed.createComponent(OpcionesFechasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
