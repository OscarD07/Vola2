import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteCityComponent } from './autocomplete-city.component';

describe('AutocompleteCityComponent', () => {
  let component: AutocompleteCityComponent;
  let fixture: ComponentFixture<AutocompleteCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteCityComponent]
    });
    fixture = TestBed.createComponent(AutocompleteCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
