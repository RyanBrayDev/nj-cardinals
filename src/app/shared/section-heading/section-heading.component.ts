import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ScrollDirection } from "./scroll-direction.model";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'cards-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.scss'],
  // animations: [
  //   trigger('spinningAnimation', [
  //     state('true', style({transform: 'rotate(360deg)'})),
  //
  //     transition('false => true', animate('1000ms'))
  //   ])
  // ]
})

export class SectionHeadingComponent implements OnInit {
  @Input()
  heading: string = '';

  lastScrollTop = 0;
  //scrollDirection = ScrollDirection.Up;
   scrollDirection = false;

   constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  //@HostListener('window:scroll', [])
  // onWindowScroll() {
  //    this.scrollDirection = true;
  //    console.log("true")
  //   //const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   //this.scrollDirection = scrollTop > this.lastScrollTop ? ScrollDirection.Down : ScrollDirection.Up;
  //   //this.lastScrollTop = scrollTop;
  //   setTimeout(() => {
  //     this.scrollDirection = false;
  //     console.log(false);
  //   }, 1000)
  // }
}
