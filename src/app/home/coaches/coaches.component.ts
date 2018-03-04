import { Component, OnInit } from '@angular/core';
import { Coach } from './coach.model';

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
    const coaches: Coach[] = [];
    coaches.push({
      Name: 'Ryan Bray',
      Position: 'Head Coach',
      Phone: '720-483-0832',
      Email: 'ryanbraydev@gmail.com',
      ImageUrl: '../../../assets/images/ryan-bray.PNG',
      Bio: `Coach Ryan grew up playing baseball in Southern California and has played softball competitively for
      the past 20+ years. He has been coaching youth baseball for the past 6 years both as a head coach and an assistant,
      and loves sharing his passion for the game. He and his wife Tammy have two kids, Kenji (11) and Kaylee (9).`
    });
    coaches.push({
      Name: 'Larry Douglas',
      Position: 'Assistant Coach',
      Phone: '303-927-9278',
      Email: 'larryd153@gmail.com',
      ImageUrl: '../../../assets/images/larry-douglas.PNG',
      Bio: `Larry grew up playing tournament baseball in the Denver area.  He continued to play through high school
      finishing up with a brief stint with the Cleveland Indians.  He has stayed active in baseball through adult
      baseball and softball leagues and has coached youth baseball for 5 years.  His family includes wife Kaylie
      and sons Kai (12) and Gage (2).`
    });
    coaches.push({
      Name: 'Mike Downing',
      Position: 'General Manager',
      Phone: '720-260-0771',
      Email: 'mikedown7@comcast.net',
      ImageUrl: '../../../assets/images/mike-downing.PNG',
      Bio: `Coach Downing played baseball at Regis High School and at Western State Colorado University where he
      was a three year starter at catcher. He has coached at Ralston Valley High School and has been a youth baseball
      coach for 20+ years.  He and his wife Angie have three great sons, Eric (26), Zach (21) and Josh (11).`
    });
    return coaches;
  }
}
