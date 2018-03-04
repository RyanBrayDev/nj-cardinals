import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachComponent } from './coach.component';
import { Coach } from "../coach.model";

describe('CoachComponent', () => {
  let component: CoachComponent;
  let fixture: ComponentFixture<CoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoachComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachComponent);
    component = fixture.componentInstance;
    const coach: Coach = {
      Name: "",
      Email: "",
      Position: "",
      Bio: "",
      ImageUrl: "",
      Phone: "",
    }
    component.coach = coach;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
