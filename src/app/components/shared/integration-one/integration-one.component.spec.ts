import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationOneComponent } from './integration-one.component';

describe('IntegrationOneComponent', () => {
  let component: IntegrationOneComponent;
  let fixture: ComponentFixture<IntegrationOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
