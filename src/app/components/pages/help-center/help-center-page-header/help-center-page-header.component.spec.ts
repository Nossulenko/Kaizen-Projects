import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterPageHeaderComponent } from './help-center-page-header.component';

describe('HelpCenterPageHeaderComponent', () => {
  let component: HelpCenterPageHeaderComponent;
  let fixture: ComponentFixture<HelpCenterPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpCenterPageHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
