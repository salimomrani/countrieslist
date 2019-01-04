import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

import {CountryDetail, CountrySummary} from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {
  }

  /**
   * get all countries from restcountries api
   */
  getAllCountry() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(
      map((countryDetails: CountryDetail[]) => {
        return countryDetails.map(data => new CountrySummary(data.alpha3Code, data.name, data.flag, data.region)
        );
      })
    );
  }

  /**
   * get country by code from restcountries api
   * @param code
   */
  getCountry(code: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }
}
