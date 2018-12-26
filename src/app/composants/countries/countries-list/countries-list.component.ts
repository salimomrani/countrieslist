import {Component, Input, OnInit} from '@angular/core';
import {CountryDetail} from '../../../model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {


  @Input() country: CountryDetail[];
  p = 1;
  itemsNumber = 10;
  numberPage = [
    {page: 10},
    {page: 50},
    {page: 100}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
