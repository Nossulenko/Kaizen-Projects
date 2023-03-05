import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-services-grid',
  templateUrl: './services-grid.component.html',
  styleUrls: ['./services-grid.component.css'],
})
export class ServicesGridComponent implements OnInit {
  @Input() dark: boolean = false;
  @Input() sectionTitle: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
