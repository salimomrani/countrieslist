import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {CountryComponent} from './country.component';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    component.country = {
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
    };
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display name and id ', function () {
    fixture.detectChanges();
    const divElement = fixture.debugElement.query(By.css('div')). nativeElement.textContent;
    expect(divElement).toContain('NAME:france');
    expect(divElement).toContain('ID:s');
  });
});
