import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceImageFeatureOneComponent } from './service-image-feature-one.component';

describe('ServiceImageFeatureOneComponent', () => {
  let component: ServiceImageFeatureOneComponent;
  let fixture: ComponentFixture<ServiceImageFeatureOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceImageFeatureOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceImageFeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
