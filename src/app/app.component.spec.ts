import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent} from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterTestingModule } from "@angular/router/testing";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { DonateComponent } from "./donate/donate.component";
import { HeroComponent } from "./home/hero/hero.component";
import { TitleComponent } from "./home/title/title.component";
import { PlayersComponent } from "./home/players/players.component";
import { CoachComponent } from "./home/coaches/coach/coach.component";
import { CoachesComponent } from "./home/coaches/coaches.component";
import { SponsorsComponent } from "./home/sponsors/sponsors.component";
import { SponsorComponent } from "./home/sponsors/sponsor/sponsor.component";
import { SectionHeadingComponent } from "./shared/section-heading/section-heading.component";


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        CalendarComponent,
        DonateComponent,
        HomeComponent,
        PageNotFoundComponent,
        HeroComponent,
        TitleComponent,
        PlayersComponent,
        CoachComponent,
        CoachesComponent,
        SponsorsComponent,
        SponsorComponent,
        SectionHeadingComponent,
      ],
      providers: [
        // Other provides...
      ],
      imports: [
        // Other modules...
        RouterTestingModule.withRoutes([
        { path: 'calendar', component: CalendarComponent },
        { path: 'donate', component: DonateComponent },
        { path: 'home', component: HomeComponent },
        { path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
        { path: '**', component: PageNotFoundComponent }
        ])
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
