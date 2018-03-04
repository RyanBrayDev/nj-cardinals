import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesComponent } from './coaches.component';
import { SectionHeadingComponent } from '../../shared/section-heading/section-heading.component';
import { CoachComponent } from './coach/coach.component';

describe('CoachesComponent', () => {
  let component: CoachesComponent;
  let fixture: ComponentFixture<CoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoachesComponent,
        CoachComponent,
        SectionHeadingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
