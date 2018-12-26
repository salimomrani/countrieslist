import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './countries/countries.component';
import {CountryDetail} from './model/country';
import {CountryDetailComponent} from './country-detail/country-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'country',
    pathMatch: 'full'
  },
  {
    path: 'country',
    component: CountriesComponent
  },
  {
    path: 'country/:code',
    component: CountryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
