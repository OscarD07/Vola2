import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFiltradoComponent } from './input-filtrado.component';

describe('InputFiltradoComponent', () => {
  let component: InputFiltradoComponent;
  let fixture: ComponentFixture<InputFiltradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFiltradoComponent]
    });
    fixture = TestBed.createComponent(InputFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
