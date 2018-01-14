import { Component, Input, OnInit } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit, OnChanges {
  @Input() rating: number;
  stars: number[];
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.stars = Array(this.rating).fill(1);
  }
}
