import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIntegrationPageHeaderComponent } from './single-integration-page-header.component';

describe('SingleIntegrationPageHeaderComponent', () => {
  let component: SingleIntegrationPageHeaderComponent;
  let fixture: ComponentFixture<SingleIntegrationPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleIntegrationPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIntegrationPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
