import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultLayoutComponent } from './modules/search-result/search-result-layout/search-result-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-result',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Search Result'
    },
    component: SearchResultLayoutComponent,
    children: [
      {
        path: 'search-result',
        loadChildren: './modules/search-result/search-result.module#SearchResultModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
