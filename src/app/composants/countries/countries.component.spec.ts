import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CountriesComponent} from './countries.component';
import {ModuleExport} from '../../../../test/test.util';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async(() => {
    ModuleExport();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
