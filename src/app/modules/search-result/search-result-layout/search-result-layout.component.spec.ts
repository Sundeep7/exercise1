import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultLayoutComponent } from './search-result-layout.component';

describe('SearchResultLayoutComponent', () => {
  let component: SearchResultLayoutComponent;
  let fixture: ComponentFixture<SearchResultLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
