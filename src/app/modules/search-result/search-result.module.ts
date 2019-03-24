import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchResultLayoutComponent } from './search-result-layout/search-result-layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SearchResultFilesComponent } from './search-result-files/search-result-files.component';

@NgModule({
  declarations: [SearchResultLayoutComponent, SearchResultFilesComponent],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    MatTabsModule
  ],
  exports:[MatTabsModule]
})
export class SearchResultModule { }
