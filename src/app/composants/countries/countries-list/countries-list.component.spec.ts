import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import {of} from 'rxjs';
import {CountryDetail} from '../../../model/country';
import {CountryService} from '../../../service/country.service';

import {CountriesListComponent} from './countries-list.component';

describe('CountriesList', () => {

  let component: CountriesListComponent;
  let fixture: ComponentFixture<CountriesListComponent>;
  let mockServiceCountry;
  let COUNTY: CountryDetail[];
  let mockActiveRoute: any;

  beforeEach(async(() => {

    mockActiveRoute = {
      snapshot: {paramMap: {get: () => 's'}}
    };
    mockServiceCountry = jasmine.createSpyObj(['getAllCountry', 'getCountry']);

    COUNTY = [
      {
        flag: 'https://restcountries.eu/data/afg.svg',
        alpha3Code: 's',
        name: 'france',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'ile de france',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'Paris'
      },
      {
        flag: 'https://restcountries.eu/data/afg.svg"',
        alpha3Code: '000',
        name: 'china',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'china',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'Paris'
      },
      {
        flag: 'https://restcountries.eu/data/afg.svg"',
        alpha3Code: 'y',
        name: 'tunisia',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'tunis',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'Paris'
      }];

    TestBed.configureTestingModule({
      declarations: [
        CountriesListComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, NgxPaginationModule],
      providers: [
        {
          provide: CountryService,
          useValue: mockServiceCountry
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListComponent);
    component = fixture.componentInstance;
    mockServiceCountry.getAllCountry.and.returnValue(of(COUNTY));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(true).toBeTruthy();
  });

  it('should have an initial value for itemNumber form', function () {
    fixture.detectChanges();
    expect(component.itemsNumber.valid).toBe(true);
    expect(component.itemsNumber.value).toEqual(10);
    expect(component.numberPage.length).toEqual(3);
  });
});
