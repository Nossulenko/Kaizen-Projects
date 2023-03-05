import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForDemoFooterComponent } from './request-for-demo-footer.component';

describe('RequestForDemoFooterComponent', () => {
  let component: RequestForDemoFooterComponent;
  let fixture: ComponentFixture<RequestForDemoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestForDemoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForDemoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
