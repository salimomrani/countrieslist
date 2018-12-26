import {Component, Input, OnInit} from '@angular/core';
import {CountryDetail} from '../../model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  p = 1;
  @Input() country: CountryDetail[];

  constructor() {
  }

  ngOnInit() {
  }

}
