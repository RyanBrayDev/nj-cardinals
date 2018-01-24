import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cards-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss']
})
export class SectionHeadingComponent implements OnInit {
  @Input()
  heading: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
