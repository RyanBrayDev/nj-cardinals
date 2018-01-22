import { Component, OnInit } from '@angular/core';
import { Coach } from "./coach.model";

@Component({
  selector: 'cards-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  public coaches: Coach[];

  constructor() {
  }

  ngOnInit() {
    this.coaches = this.InitializeCoaches();
  }

  InitializeCoaches(): Coach[] {
    let coaches: Coach[] = [];
    coaches.push({
      Name: 'Ryan Bray',
      Position: 'Head Coach',
      Phone: '(720) 483-0832',
      Email: 'ryanbraydev@gmail.com',
      ImageUrl: './assets/',
      Bio: `Coach Ryan grew up playing baseball in Southern California and has played softball competitively for 
      the past 20+ years. He has been coaching youth baseball for the past 6 years both as a head coach and an assistant,
      and loves sharing his passion for the game. He and his wife Tammy have two kids, Kenji (10) and Kaylee (8).`
    })
    return coaches;
  }
}
