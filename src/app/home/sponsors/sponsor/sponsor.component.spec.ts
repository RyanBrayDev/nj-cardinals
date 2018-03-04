import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorComponent } from './sponsor.component';
import { Coach } from "../../coaches/coach.model";
import { Sponsor } from "../sponsor.model";

describe('SponsorComponent', () => {
  let component: SponsorComponent;
  let fixture: ComponentFixture<SponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorComponent);
    component = fixture.componentInstance;
    const sponsor: Sponsor = {
      Name: "",
      Address: "",
      Website: "",
      Phone: "",
      ImageUrl: "",
    }
    component.sponsor = sponsor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
