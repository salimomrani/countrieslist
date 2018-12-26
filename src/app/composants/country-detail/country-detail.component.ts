import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../../service/country.service';
import {CountryDetail} from '../../model/country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  private country: CountryDetail;

  constructor(private route: ActivatedRoute,
              private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getCountry(this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (country: CountryDetail) => this.country = country
      );
  }

}
