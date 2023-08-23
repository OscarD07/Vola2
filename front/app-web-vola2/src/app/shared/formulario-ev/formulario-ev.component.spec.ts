import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEvComponent } from './formulario-ev.component';

describe('FormularioEvComponent', () => {
  let component: FormularioEvComponent;
  let fixture: ComponentFixture<FormularioEvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEvComponent]
    });
    fixture = TestBed.createComponent(FormularioEvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
