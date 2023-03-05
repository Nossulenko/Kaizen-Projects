import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationBoxComponent } from './integration-box.component';

describe('IntegrationBoxComponent', () => {
  let component: IntegrationBoxComponent;
  let fixture: ComponentFixture<IntegrationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
