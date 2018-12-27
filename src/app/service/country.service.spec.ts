import {TestBed} from '@angular/core/testing';

import {CountryService} from './country.service';
import {HttpClientModule} from '@angular/common/http';

describe('CountryService', () => {
  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
  });

  it('should be created', () => {
    const service: CountryService = TestBed.get(CountryService);
    expect(service).toBeTruthy();
  });
});
