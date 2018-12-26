import {Component, Input, OnInit} from '@angular/core';
import {CountryDetail} from '../../../../model/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() country: CountryDetail;

  constructor() {
  }

  ngOnInit() {
  }

}
