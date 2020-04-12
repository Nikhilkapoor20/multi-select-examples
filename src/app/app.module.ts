import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilterStateComponent } from './FilterState/filter-state.component';
import { GridCountryComponent } from './grid-country/grid-country.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { FilterPipe } from './pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    GridCountryComponent,
    FilterPipe,
    FilterStateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
