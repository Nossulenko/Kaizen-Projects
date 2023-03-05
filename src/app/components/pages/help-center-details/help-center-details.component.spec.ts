import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterDetailsComponent } from './help-center-details.component';

describe('HelpCenterDetailsComponent', () => {
  let component: HelpCenterDetailsComponent;
  let fixture: ComponentFixture<HelpCenterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
