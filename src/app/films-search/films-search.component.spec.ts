import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsSearchComponent } from './films-search.component';

describe('FilmsSearchComponent', () => {
  let component: FilmsSearchComponent;
  let fixture: ComponentFixture<FilmsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
