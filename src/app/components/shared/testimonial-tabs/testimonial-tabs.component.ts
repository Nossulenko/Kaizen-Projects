import { Component, OnInit, Input } from '@angular/core';
import GLightbox from 'glightbox';
@Component({
  selector: 'app-testimonial-tabs',
  templateUrl: './testimonial-tabs.component.html',
  styleUrls: ['./testimonial-tabs.component.css'],
})
export class TestimonialTabsComponent implements OnInit {
  @Input() dark: boolean = false;

  constructor() {}

  lightbox: any;
  ngOnInit() {
    //lightbox settings
    this.lightbox = GLightbox({
      href: 'https://www.youtube.com/watch?v=hAP2QF--2Dg',
      type: 'video',
      source: 'youtube',
      width: 800,
      autoplayVideos: true,
    });
  }
}
