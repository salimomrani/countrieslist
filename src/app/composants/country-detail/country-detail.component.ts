import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CountryDetail} from '../../model/country';
import {CountryService} from '../../service/country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country: CountryDetail;

  constructor(private route: ActivatedRoute,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountry(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (country: CountryDetail) => {
          this.country = country;
        }
      );
  }

}
