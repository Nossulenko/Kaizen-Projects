import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCtaComponent } from './news-cta.component';

describe('NewsCtaComponent', () => {
  let component: NewsCtaComponent;
  let fixture: ComponentFixture<NewsCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsCtaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
