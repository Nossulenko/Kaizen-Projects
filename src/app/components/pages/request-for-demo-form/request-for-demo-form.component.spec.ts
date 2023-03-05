import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForDemoFormComponent } from './request-for-demo-form.component';

describe('RequestForDemoFormComponent', () => {
  let component: RequestForDemoFormComponent;
  let fixture: ComponentFixture<RequestForDemoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForDemoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
