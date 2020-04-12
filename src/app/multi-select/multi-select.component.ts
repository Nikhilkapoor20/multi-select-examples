import { MockService } from './../mock.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {

  @ViewChild('selectBox', { static: false }) selectBox: ElementRef;

  constructor(private service: MockService) { }
  countries: any[] = [];
  selectedCounty = [];

  ngOnInit() {
    this.service.getCountries().subscribe(response => this.countries = response);
    this.service.selectedCountries$.subscribe(response => this.selectedCounty = response);
  }

  toggleSelectBox() {
    var checkList = document.getElementById('list1');
    if (checkList.classList.contains('visible')) {
      checkList.classList.remove('visible');
    }
    else {
      checkList.classList.add('visible');
    }
  }

  closeSelectBox() {
    var checkList = document.getElementById('list1');
    checkList.classList.remove('visible');
  }

  addSelectedCountries(country) {
    this.service.addSelectedCountries(country);
  }

  unSelect(county) {
    county.selected = false;
    this.service.unCheck(county);
  }
}