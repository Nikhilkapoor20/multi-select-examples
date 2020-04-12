import { MockService } from '../mock.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grid-country',
  templateUrl: './grid-country.component.html',
  styleUrls: ['./grid-country.component.scss']
})
export class GridCountryComponent {


  constructor(private service: MockService) { }
  countries: any[] = [];

  ngOnInit() {
    this.service.selectedCountries$.subscribe(response => {
      this.countries = response;
    })
  }

  unCheck(county) {
    county.selected = false;
    this.service.unCheck(county);
  }

}