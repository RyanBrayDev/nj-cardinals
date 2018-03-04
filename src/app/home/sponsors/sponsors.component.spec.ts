import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsComponent } from './sponsors.component';
import { SectionHeadingComponent } from "../../shared/section-heading/section-heading.component";
import { SponsorComponent } from "./sponsor/sponsor.component";

describe('SponsorsComponent', () => {
  let component: SponsorsComponent;
  let fixture: ComponentFixture<SponsorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorsComponent, SectionHeadingComponent, SponsorComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
