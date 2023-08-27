import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientoComponent } from './asiento.component';

describe('AsientoComponent', () => {
  let component: AsientoComponent;
  let fixture: ComponentFixture<AsientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsientoComponent]
    });
    fixture = TestBed.createComponent(AsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
