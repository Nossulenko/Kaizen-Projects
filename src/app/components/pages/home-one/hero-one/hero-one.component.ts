import { Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-hero-one',
  templateUrl: './hero-one.component.html',
  styleUrls: ['./hero-one.component.css'],
})
export class HeroOneComponent implements OnInit {
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
