export class Currency {
  code: string;
  name: string;
  symbol: string;
}

export class Language {
  name: string;
}

export class CountryDetail {
  alpha3Code: string;
  name: string;
  callingCodes: string[];
  capital: string;
  region: string;
  population: number;
  area: number;
  timezones: string;
  currencies: Currency[];
  languages: Language[];
  flag: string;
}

export class CountrySummary {
  alpha3Code: string;
  name: string;
  flag: string;


  constructor(alpha3Code: string, name: string, flag: string) {
    this.alpha3Code = alpha3Code;
    this.name = name;
    this.flag = flag;
  }
}
