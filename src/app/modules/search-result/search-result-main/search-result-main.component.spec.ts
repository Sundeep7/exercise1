import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultMainComponent } from './search-result-main.component';

describe('SearchResultMainComponent', () => {
  let component: SearchResultMainComponent;
  let fixture: ComponentFixture<SearchResultMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
