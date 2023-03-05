import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIntegrationComponent } from './single-integration.component';

describe('SingleIntegrationComponent', () => {
  let component: SingleIntegrationComponent;
  let fixture: ComponentFixture<SingleIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
