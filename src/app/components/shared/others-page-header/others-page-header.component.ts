import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-others-page-header',
  templateUrl: './others-page-header.component.html',
  styleUrls: ['./others-page-header.component.css'],
})
export class OthersPageHeaderComponent implements OnInit {
  @Input() title!: string;
  @Input() desc!: string;

  constructor() {}

  ngOnInit(): void {}
}
