import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DonateComponent } from './donate/donate.component';
import { HeroComponent } from './home/hero/hero.component';
import { TitleComponent } from './home/title/title.component';
import { PlayersComponent } from './home/players/players.component';
import { CoachesComponent } from './home/coaches/coaches.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CoachComponent } from './home/coaches/coach/coach.component';
import { SponsorComponent } from './home/sponsors/sponsor/sponsor.component';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'donate',      component: DonateComponent },
  { path: 'home',      component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
    DonateComponent,
    HeroComponent,
    TitleComponent,
    PlayersComponent,
    CoachesComponent,
    SponsorsComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    CoachComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
