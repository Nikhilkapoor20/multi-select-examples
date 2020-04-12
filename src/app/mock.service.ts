import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MockService {
  countries = [{
    name: 'India',
    selected: false,
    value: 'In',
  },
  {
    name: 'America',
    selected: false,
    value: 'US',

  },
  {
    name: 'Germany',
    selected: false,
    value: 'gn',

  },
  {
    name: 'London',
    selected: false,
    value: 'UK',

  }, {
    name: 'China',
    selected: false,
    value: 'cn',
  }];

  cityData = [{
    name: 'Delhi',
    state: 'DL'
  },
  {
    name: 'Kanpur',
    state: 'UP'
  },
  {
    name: 'bihar',
    state: 'UP'
  },
  {
    name: 'Haridwar',
    state: 'UK'
  },
  {
    name: 'Dehradun',
    state: 'UK'
  },
  {
    name: 'Rishikesh',
    state: 'UK'
  }];

  stateData = [{
    name: 'Uttar Pradesh',
    country: 'In',
    stateCode: 'UP',
  },
  {
    name: 'Uttrakhand',
    country: 'In',
    stateCode: 'UK',
  },{
    name: 'Delhi',
    country: 'In',
    stateCode: 'DL',
  }]

  selectedCountries$ = new Subject<any[]>();
  selectedCountries = [];

  getCountries(): Observable<any> {
    return of(this.countries);
  }

  addSelectedCountries(county) {
    if (county.selected) {
      const index = this.selectedCountries.findIndex(county => county.value === county.value);
      this.selectedCountries.splice(index, 1);
    } else {
      this.selectedCountries.push(county);
    }
    this.selectedCountries$.next(this.selectedCountries);
  }

  unCheck(country) {
    country.selected = false;
    const index = this.selectedCountries.findIndex(county => county.value === country.value);
    this.selectedCountries.splice(index, 1);
    this.selectedCountries$.next(this.selectedCountries);
  }
}