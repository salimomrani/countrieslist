import {TestBed} from '@angular/core/testing';
import {CountriesListComponent} from '../src/app/composants/countries/countries-list/countries-list.component';
import {CountriesComponent} from '../src/app/composants/countries/countries.component';
import {CountryComponent} from '../src/app/composants/countries/countries-list/country/country.component';
import {CountryDetailComponent} from '../src/app/composants/country-detail/country-detail.component';
import {CountryFilterComponent} from '../src/app/composants/country-filter/country-filter.component';
import {NotFoundComponent} from '../src/app/composants/not-found/not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../src/app/app-routing.module';
import {HttpClientModule} from '@angular/common/http';


export function ModuleExport() {
  TestBed.configureTestingModule({
    declarations: [
      CountriesListComponent,
      CountriesComponent,
      CountryComponent,
      CountryDetailComponent,
      CountryFilterComponent,
      NotFoundComponent],
    imports: [NgxPaginationModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule]
  })
    .compileComponents();
}
