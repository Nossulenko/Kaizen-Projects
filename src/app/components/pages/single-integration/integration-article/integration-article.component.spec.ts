import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationArticleComponent } from './integration-article.component';

describe('IntegrationArticleComponent', () => {
  let component: IntegrationArticleComponent;
  let fixture: ComponentFixture<IntegrationArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
