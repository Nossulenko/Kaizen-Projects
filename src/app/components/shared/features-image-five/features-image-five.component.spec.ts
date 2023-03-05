import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesImageFiveComponent } from './features-image-five.component';

describe('FeaturesImageFiveComponent', () => {
  let component: FeaturesImageFiveComponent;
  let fixture: ComponentFixture<FeaturesImageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturesImageFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesImageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
