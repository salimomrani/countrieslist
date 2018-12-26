import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CountriesComponent} from './composants/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {CountriesListComponent} from './composants/countries/countries-list/countries-list.component';
import {CountryComponent} from './composants/countries/countries-list/country/country.component';
import {CountryDetailComponent} from './composants/country-detail/country-detail.component';
import {FormsModule} from '@angular/forms';
import { CountryFilterComponent } from './composants/country-filter/country-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountriesListComponent,
    CountryComponent,
    CountryDetailComponent,
    CountryFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
