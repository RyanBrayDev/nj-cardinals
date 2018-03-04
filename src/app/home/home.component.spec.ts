import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { TitleComponent } from './title/title.component';
import { PlayersComponent } from './players/players.component';
import { CoachesComponent } from './coaches/coaches.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CoachComponent } from './coaches/coach/coach.component';
import { SponsorComponent } from './sponsors/sponsor/sponsor.component';
import { SectionHeadingComponent } from '../shared/section-heading/section-heading.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeroComponent,
        TitleComponent,
        PlayersComponent,
        CoachesComponent,
        SponsorsComponent,
        CoachComponent,
        SponsorComponent,
        SectionHeadingComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
