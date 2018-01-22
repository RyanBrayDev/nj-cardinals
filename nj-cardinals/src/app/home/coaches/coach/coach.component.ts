import { Component, Input, OnInit } from '@angular/core';
import { Coach } from "../coach.model";

@Component({
  selector: 'cards-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent implements OnInit {
  @Input()
  public coach: Coach;

  constructor() {
  }

  ngOnInit() {
  }

}
