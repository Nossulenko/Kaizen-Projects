import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialTabsComponent } from './testimonial-tabs.component';

describe('TestimonialTabsComponent', () => {
  let component: TestimonialTabsComponent;
  let fixture: ComponentFixture<TestimonialTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimonialTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
