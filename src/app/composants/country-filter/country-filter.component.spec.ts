import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFilterComponent } from './country-filter.component';
import {ModuleExport} from '../../../../test/test.util';

describe('CountryFilterComponent', () => {
  let component: CountryFilterComponent;
  let fixture: ComponentFixture<CountryFilterComponent>;

  beforeEach(async(() => {
    ModuleExport();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
