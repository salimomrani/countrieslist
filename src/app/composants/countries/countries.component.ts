import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../service/country.service';
import {CountrySummary} from '../../model/country';
import {Observable, Subject} from 'rxjs';
import {Filter} from '../../model/filter';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  private listCountry: Subject<CountrySummary[]> = new Subject();
  public listCountryObservable: Observable<CountrySummary[]>;
  private countryList: CountrySummary[];

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.getAllCountry();
  }

  private getAllCountry() {
    this.countryService.getAllCountry().subscribe((countries) => {
      this.countryList = countries;
      this.listCountry.next(countries);
    });
    this.listCountryObservable = this.listCountry.asObservable();
  }

  onFilterChange(filterData: Filter) {
    const newCountryList = this.countryList.filter(country => {
      switch (filterData.category) {
        case 'id':
          return new RegExp(filterData.query.toUpperCase()).test(country.alpha3Code);
        case 'name':
          return new RegExp(filterData.query.toLocaleLowerCase()).test(country.name.toLocaleLowerCase());
        case 'region':
          return new RegExp(filterData.query.toLocaleLowerCase()).test(country.region.toLocaleLowerCase());
        default:
          return false;
      }
    });
    this.listCountry.next(newCountryList);
  }
}
