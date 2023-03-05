import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPageHeaderComponent } from './news-page-header.component';

describe('NewsPageHeaderComponent', () => {
  let component: NewsPageHeaderComponent;
  let fixture: ComponentFixture<NewsPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
