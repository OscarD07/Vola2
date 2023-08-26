import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBvComponent } from './formulario-bv.component';

describe('FormularioBvComponent', () => {
  let component: FormularioBvComponent;
  let fixture: ComponentFixture<FormularioBvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioBvComponent]
    });
    fixture = TestBed.createComponent(FormularioBvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
