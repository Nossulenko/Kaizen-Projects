import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationTwoComponent } from './integration-two.component';

describe('IntegrationTwoComponent', () => {
  let component: IntegrationTwoComponent;
  let fixture: ComponentFixture<IntegrationTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
