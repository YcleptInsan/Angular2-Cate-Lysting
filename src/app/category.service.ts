import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORIES } from './mock-objects';

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
}
