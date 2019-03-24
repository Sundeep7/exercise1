import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultLayoutComponent } from './search-result-layout/search-result-layout.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Search Result'
    },
    //component: SearchResultLayoutComponent,
    children: [
      {
        path: '',               
        loadChildren: './search-result-main/search-result-main.module#SearchResultMainModule',
        data: {
          title: 'Search Result'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultRoutingModule { }
