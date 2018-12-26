import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CountriesComponent} from './composants/countries/countries.component';
import {CountryDetailComponent} from './composants/country-detail/country-detail.component';
import {NotFoundComponent} from './not-found/not-found.component';

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
    path: 'country/:id',
    component: CountryDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
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
