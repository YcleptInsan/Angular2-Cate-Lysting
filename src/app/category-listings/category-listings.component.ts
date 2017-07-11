import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-listings',
  templateUrl: './category-listings.component.html',
  styleUrls: ['./category-listings.component.css'],
  providers: [CategoryService]
})
export class CategoryListingsComponent implements OnInit {
  listings: Listing[];
  categoryId: number;

  constructor(private router: Router, private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.categoryId = parseInt(urlParameters['id']);
   });
   this.listings = this.categoryService.getListingByCategoryId(this.categoryId);
  }

  goToDetailPage(clickedListing: Listing) {
    this.router.navigate(['listings', clickedListing.id]);
  };
}
