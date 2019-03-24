import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultLayoutComponent } from './search-result-layout/search-result-layout.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [SearchResultLayoutComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    MatTabsModule
  ],
  exports:[MatTabsModule]
})
export class SearchResultModule { }
