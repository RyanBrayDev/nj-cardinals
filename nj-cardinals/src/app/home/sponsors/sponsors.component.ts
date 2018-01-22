import { Component, OnInit } from '@angular/core';
import { Sponsor } from "./sponsor.model";

@Component({
  selector: 'cards-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  public sponsors: Sponsor[] = [];

  constructor() {
  }

  ngOnInit() {
    this.sponsors = this.InitializeSponsors();
  }

  InitializeSponsors(): Sponsor[]{
    let sponsors: Sponsor[] = [];
    return sponsors;
  }

}
