import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImageFeatureTwoComponent } from './service-image-feature-two.component';

describe('ServiceImageFeatureTwoComponent', () => {
  let component: ServiceImageFeatureTwoComponent;
  let fixture: ComponentFixture<ServiceImageFeatureTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceImageFeatureTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceImageFeatureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
