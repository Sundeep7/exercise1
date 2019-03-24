import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultMainRoutingModule } from './search-result-main-routing.module';
import { SearchResultMainComponent } from './search-result-main.component';
//import { SearchResultLayoutComponent } from '../search-result-layout/search-result-layout.component';

@NgModule({
  declarations: [SearchResultMainComponent],
  imports: [
    CommonModule,
    SearchResultMainRoutingModule
  ]
})
export class SearchResultMainModule { }
