import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedNewsComponent } from './related-news.component';

describe('RelatedNewsComponent', () => {
  let component: RelatedNewsComponent;
  let fixture: ComponentFixture<RelatedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
