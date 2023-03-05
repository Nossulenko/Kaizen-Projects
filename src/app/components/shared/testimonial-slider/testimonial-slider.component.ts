import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.css'],
})
export class TestimonialSliderComponent implements OnInit {
  @Input() dark: boolean = false;
  @Input() light: boolean = false;
  constructor() {}

  config: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-nav-control .swiper-button-next',
      prevEl: '.swiper-nav-control .swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1142: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  };

  ngOnInit(): void {}
}
