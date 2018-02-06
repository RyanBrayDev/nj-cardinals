import { Component, OnInit } from '@angular/core';
import { Sponsor } from './sponsor.model';

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

  InitializeSponsors(): Sponsor[] {
    const sponsors: Sponsor[] = [];
    sponsors.push({
      Name: "Ondrish & Associates",
      Website: "http://www.ondrishcpa.com/",
      Address: "1600 Stout Street, Suite 1800, Denver",
      Phone: "303-298-7262",
      ImageUrl: "../../../../assets/images/sponsors/ondrish.png"
    });

    sponsors.push({
      Name: "Tammmy Bray",
      Address: "7878 W. 80th Pl Unit 2C, Arvada",
      Website: "www.8z.com",
      Phone: "303-898-7494",
      ImageUrl: "../../../../assets/images/sponsors/8z.png",
    });

    sponsors.push({
      Name: "First Choice Reconditioning",
      Website: "http://www.thebumperguys.biz/",
      Address: "6975 Lakewood Pl, Lakewood",
      Phone: "303-995-7169",
      ImageUrl: "../../../../assets/images/sponsors/first-choice.png"
    });

    return sponsors;
  }

}
