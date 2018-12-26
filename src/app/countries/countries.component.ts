import {Component, OnInit} from '@angular/core';
import {CountryService} from '../service/country.service';
import {CountrySummary} from '../model/country';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  private listCountry: Observable<CountrySummary[]>;


  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.getAllCountry();
  }

  private getAllCountry() {
    this.listCountry = this.countryService.getAllCountry();
  }
}
