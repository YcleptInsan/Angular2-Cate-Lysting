import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListingsComponent } from './category-listings.component';

describe('CategoryListingsComponent', () => {
  let component: CategoryListingsComponent;
  let fixture: ComponentFixture<CategoryListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
