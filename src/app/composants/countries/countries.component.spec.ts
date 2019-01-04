import {HttpClientModule} from '@angular/common/http';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import {of} from 'rxjs';
import {RouterLinkDirectiveStub} from '../../../../test/router-link-stub';

import {CountryDetail} from '../../model/country';
import {Filter} from '../../model/filter';
import {CountryService} from '../../service/country.service';
import {CountriesComponent} from './countries.component';

describe('CountriesComponent', () => {

  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let mockServiceCountry;
  let COUNTY: CountryDetail[];
  let mockActiveRoute: any;
  let buttonGoBack;

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
        CountriesComponent,
        RouterLinkDirectiveStub],
      imports: [HttpClientModule, ReactiveFormsModule, NgxPaginationModule],
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
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    mockServiceCountry.getAllCountry.and.returnValue(of(COUNTY));
    buttonGoBack = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component.countryList.length).toEqual(3);
    expect(true).toBeTruthy();
  });

  it('should extract the right data when calling filter method with name category', () => {
    fixture.detectChanges();
    component.listCountryObservable.subscribe((data: CountryDetail[]) => {
      expect(data[0].name).toEqual('france');
      expect(data.length).toEqual(1);
    });
    const countryFilter = new Filter('fra', 'name');
    component.onFilterChange(countryFilter);
  });

  it('should extract the right data when calling filter method with id category', () => {
    fixture.detectChanges();
    component.listCountryObservable.subscribe((data: CountryDetail[]) => {
      expect(data[0].name).toEqual('china');
      expect(data.length).toEqual(1);
    });
    const countryFilter = new Filter('000', 'id');
    component.onFilterChange(countryFilter);
  });

  it('should extract the right data when calling filter method with region category', () => {
    fixture.detectChanges();
    component.listCountryObservable.subscribe((data: CountryDetail[]) => {
      expect(data[0].name).toEqual('tunisia');
      expect(data.length).toEqual(1);
    });
    const countryFilter = new Filter('tun', 'region');
    component.onFilterChange(countryFilter);
  });

  it('should extract the right data when calling filter method with null category', () => {
    fixture.detectChanges();
    component.listCountryObservable.subscribe((data: CountryDetail[]) => {
      expect(data.length).toEqual(0);
    });

    const countryFilter = new Filter('tunisia', '');
    component.onFilterChange(countryFilter);
  });
});
