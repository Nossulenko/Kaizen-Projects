import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSinglePageHeaderComponent } from './career-single-page-header.component';

describe('CareerSinglePageHeaderComponent', () => {
  let component: CareerSinglePageHeaderComponent;
  let fixture: ComponentFixture<CareerSinglePageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerSinglePageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerSinglePageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
