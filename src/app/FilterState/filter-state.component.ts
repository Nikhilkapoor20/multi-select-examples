import { MockService } from '../mock.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-filter-state',
  templateUrl: './filter-state.component.html',
  styleUrls: ['./filter-state.component.scss']
})
export class FilterStateComponent {


  constructor(private service: MockService) { }
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];
  selectedCounty = '';
  selectedState = '';
  selectedCity = '';
  ngOnInit() {
    this.service.getCountries().subscribe(response => {
      this.countries = response;
    });

    this.states = [...this.service.stateData];
    this.cities = [...this.service.cityData];
  }

  reset() {
    this.selectedState = '';
    this.selectedCity = '';
  }



}