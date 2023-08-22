import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Ciudad } from '../models/ciudad.model';

@Component({
  selector: 'app-autocomplete-city',
  templateUrl: './autocomplete-city.component.html',
})
export class AutocompleteCityComponent {
  @Input() placeholder: string = '';
  @Input() ciudades: Ciudad[] = [];
  @Input() control: FormControl = new FormControl();
  @Output() filter = new EventEmitter<any>();
  @Output() select = new EventEmitter<Ciudad>();


}