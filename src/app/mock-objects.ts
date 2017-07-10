import { Category } from './category.model';
import { Listing } from './listing.model';

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

export const LISTINGS: Listing[] = [
  new Listing("Buy this thing", "This is a thing that you can buy from me.", 1, 5),
  new Listing("Get this service", "This is a service I am providing", 2, 6)
];
