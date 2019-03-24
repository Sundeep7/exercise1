import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-result-layout',
  templateUrl: './search-result-layout.component.html',
  styleUrls: ['./search-result-layout.component.scss']
})
export class SearchResultLayoutComponent implements OnInit {
public navLinks = [
  {
    path: "/search-result",
    label: "Top"
  },
  {
    path: "",
    label: "Links"
  }

];
  constructor() { }

  ngOnInit() {
  }

}
