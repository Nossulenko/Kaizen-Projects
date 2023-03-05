import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterDetailsArticleComponent } from './help-center-details-article.component';

describe('HelpCenterDetailsArticleComponent', () => {
  let component: HelpCenterDetailsArticleComponent;
  let fixture: ComponentFixture<HelpCenterDetailsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterDetailsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterDetailsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
