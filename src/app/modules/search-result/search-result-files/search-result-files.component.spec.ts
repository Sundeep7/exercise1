import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultFilesComponent } from './search-result-files.component';

describe('SearchResultFilesComponent', () => {
  let component: SearchResultFilesComponent;
  let fixture: ComponentFixture<SearchResultFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
