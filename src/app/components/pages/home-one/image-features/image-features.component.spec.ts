import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFeaturesComponent } from './image-features.component';

describe('ImageFeaturesComponent', () => {
  let component: ImageFeaturesComponent;
  let fixture: ComponentFixture<ImageFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
