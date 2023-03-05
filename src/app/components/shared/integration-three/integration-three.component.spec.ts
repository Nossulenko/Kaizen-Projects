import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationThreeComponent } from './integration-three.component';

describe('IntegrationThreeComponent', () => {
  let component: IntegrationThreeComponent;
  let fixture: ComponentFixture<IntegrationThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
