import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ListingService]
})

export class CategoryComponent implements OnInit {
  listings: Listing[];

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

  goToDetailPage(clickedListing: Listing) {
    this.router.navigate(['listings', clickedListing.id]);
  };
}
