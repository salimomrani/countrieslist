import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountriesListComponent} from './countries-list.component';
import {ModuleExport} from '../../../../../test/test.util';

describe('CountriesListComponent', () => {
  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;

  beforeEach(async(() => {
    ModuleExport();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
