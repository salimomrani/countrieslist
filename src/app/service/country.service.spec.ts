import {TestBed} from '@angular/core/testing';

import {CountryService} from './country.service';
import {CountryDetail} from '../model/country';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CountryService', () => {
  let service: CountryService;
  let ALLCOUNTRY: CountryDetail[];
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    });
  });

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CountryService);
    ALLCOUNTRY = [
      {
        flag: 'dfdsfdfsdf',
        alpha3Code: 'R',
        name: 'france',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'ile',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'PAris'
      }, {
        flag: 'dfdsfdfsdf',
        alpha3Code: 's',
        name: 'france',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'ile',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'PAris'
      }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all country data from api service', () => {
    service.getAllCountry().subscribe();
    const req = httpTestingController.expectOne('https://restcountries.eu/rest/v2/all');
    req.flush(ALLCOUNTRY);
    httpTestingController.verify();
  });

  it('should retrieve country by code', () => {
    service.getCountry('s').subscribe();

    const req = httpTestingController.expectOne(`https://restcountries.eu/rest/v2/alpha/s`);
    req.flush({
      flag: 'dfdsfdfsdf',
      alpha3Code: 's',
      name: 'france',
      callingCodes: ['000'],
      capital: 'paris',
      region: 'ile',
      languages: [{name: 'fr'}],
      currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
      population: 23433,
      area: 233,
      timezones: 'PAris'
    });
    httpTestingController.verify();

  });
});
