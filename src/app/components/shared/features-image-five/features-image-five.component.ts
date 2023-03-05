import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features-image-five',
  templateUrl: './features-image-five.component.html',
  styleUrls: ['./features-image-five.component.css'],
})
export class FeaturesImageFiveComponent implements OnInit {
  @Input() bglight: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
