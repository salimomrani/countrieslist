import {HttpClientModule} from '@angular/common/http';
import {async, ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {RouterLinkDirectiveStub} from '../../../../test/router-link-stub';

import {CountryDetail} from '../../model/country';
import {CountryService} from '../../service/country.service';
import {CountryDetailComponent} from './country-detail.component';

describe('DetailCountryComponent', () => {

  let component: CountryDetailComponent;
  let fixture: ComponentFixture<CountryDetailComponent>;
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
        region: 'ile',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'Paris'
      },
      {
        flag: 'https://restcountries.eu/data/afg.svg"',
        alpha3Code: 'o',
        name: 'france',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'ile',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'Paris'
      },
      {
        flag: 'https://restcountries.eu/data/afg.svg"',
        alpha3Code: 'y',
        name: 'france',
        callingCodes: ['000'],
        capital: 'paris',
        region: 'ile',
        languages: [{name: 'fr'}],
        currencies: [{name: 'euro', symbol: 'sd', code: 'fd'}],
        population: 23433,
        area: 233,
        timezones: 'Paris'
      }];

    TestBed.configureTestingModule({
      declarations: [CountryDetailComponent, RouterLinkDirectiveStub],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: mockActiveRoute
        },
        {
          provide: CountryService,
          useValue: mockServiceCountry
        },
      ],
    });
  }));

  function mockGetCountry(code: string) {
    const country = COUNTY.filter(c => c.alpha3Code === code);
    return country ? country[0] : [];
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailComponent);
    component = fixture.componentInstance;
    mockServiceCountry.getCountry.and.returnValue(of(mockGetCountry(mockActiveRoute.snapshot.paramMap.get())));
    buttonGoBack = fixture.debugElement.query(By.css('button'));
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should retrieve exact country by code', fakeAsync(() => {
    fixture.detectChanges();
    flush();
    expect(mockActiveRoute.snapshot.paramMap.get()).toEqual(component.country.alpha3Code, 'is params equal');
    expect(component.country.name).toEqual('france', 'value equal');
  }));

  it('should display go back on button text', function () {
    expect(buttonGoBack.nativeElement.textContent).toEqual('go back');
  });

  it('should redirect to country url when clicking on go back button', () => {
    buttonGoBack.triggerEventHandler('click', null);
    fixture.detectChanges();
    const routerLink = fixture.debugElement
      .query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);
    expect(routerLink.linkParams).toEqual(['/country']);
  });


  it('should display country details on html page', () => {
    fixture.detectChanges();
    const liList = fixture.debugElement.queryAll(By.css('li'));
    const titleContent = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;
    expect(liList.length).toEqual(5);
    expect(liList.length).not.toBeGreaterThan(5);
    expect(titleContent).toContain(COUNTY[0].name);
    expect(liList[0].nativeElement.textContent).toContain(COUNTY[0].capital, 'capital display');
    expect(liList[1].nativeElement.textContent).toContain(COUNTY[0].region, 'region display');
    expect(liList[2].nativeElement.textContent).toContain(COUNTY[0].population, 'population display');
    expect(liList[3].nativeElement.textContent).toContain(COUNTY[0].currencies[0].name, 'currency display');
    expect(liList[4].nativeElement.textContent).toContain(COUNTY[0].languages[0].name, 'language display');
  });
});
