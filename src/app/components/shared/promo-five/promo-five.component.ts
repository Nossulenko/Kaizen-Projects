import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-promo-five',
  templateUrl: './promo-five.component.html',
  styleUrls: ['./promo-five.component.css'],
})
export class PromoFiveComponent implements OnInit {
  @Input() bgLight: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
