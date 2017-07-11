import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORIES } from './mock-objects';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-objects';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

  getCategoryById(categoryId: number) {
    for (let i = 0; i <= CATEGORIES.length - 1; i++)  {
      if (CATEGORIES[i].id === categoryId) {
        return CATEGORIES[i];
      }
    }
  }

  getListingByCategoryId(id: number) {
    let categoryListings = [];
    for (let i = 0; i <= LISTINGS.length - 1; i++)  {
      if (LISTINGS[i].categoryId === id) {
       categoryListings.push(LISTINGS[i]);
      }
    }
    return categoryListings;
  }
}
