import { Component, Inject, Input, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'cards-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
})

export class SectionHeadingComponent implements OnInit {
  @Input()
  heading = '';

   constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

}
