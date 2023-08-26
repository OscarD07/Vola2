import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasCercanasComponent } from './fechas-cercanas.component';

describe('FechasCercanasComponent', () => {
  let component: FechasCercanasComponent;
  let fixture: ComponentFixture<FechasCercanasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FechasCercanasComponent]
    });
    fixture = TestBed.createComponent(FechasCercanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
