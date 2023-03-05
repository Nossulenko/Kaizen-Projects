import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css'],
})
export class PriceListComponent implements OnInit {
  @Input() sectionTitle: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
