import { Component, Input, OnInit } from '@angular/core';
import { Sponsor } from "../sponsor.model";

@Component({
  selector: 'cards-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {
  @Input()
  public sponsor: Sponsor;

  constructor() {
  }

  ngOnInit() {
  }

}
