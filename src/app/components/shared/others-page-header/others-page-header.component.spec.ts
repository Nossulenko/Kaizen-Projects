import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersPageHeaderComponent } from './others-page-header.component';

describe('OthersPageHeaderComponent', () => {
  let component: OthersPageHeaderComponent;
  let fixture: ComponentFixture<OthersPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
