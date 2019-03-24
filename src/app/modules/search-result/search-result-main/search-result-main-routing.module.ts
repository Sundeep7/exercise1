import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultLayoutComponent } from '../search-result-layout/search-result-layout.component';
import { SearchResultMainComponent } from './search-result-main.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Main'
    },
    component: SearchResultMainComponent,
    // children: [
    //   {
    //     path: '',
    //     component: SearchResultMainComponent,
    //     data: {
    //       title: 'Main'
    //     }
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultMainRoutingModule { }
