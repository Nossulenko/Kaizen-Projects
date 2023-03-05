import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedIntegrationsComponent } from './related-integrations.component';

describe('RelatedIntegrationsComponent', () => {
  let component: RelatedIntegrationsComponent;
  let fixture: ComponentFixture<RelatedIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedIntegrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
