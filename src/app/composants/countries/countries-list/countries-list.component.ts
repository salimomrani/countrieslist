import {Component, Input, OnInit} from '@angular/core';
import {CountrySummary} from '../../../model/country';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-country-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  @Input() country: CountrySummary[];
  p = 1;
  itemsNumber: FormControl = new FormControl(10);
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
