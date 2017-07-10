import { Listing } from './listing.model';
import { Category } from './category.model';

export const LISTINGS: Listing[] = [
  // new Listing("")
];

export const CATEGORIES: Category[] = [
  new Category("community", 1),
  new Category("personals", 2),
  new Category("discussion forums", 3),
  new Category("housing", 4),
  new Category("for sale", 5),
  new Category("services", 6),
  new Category("jobs", 7),
  new Category("gigs", 8),
  new Category("resumes", 9)
];
