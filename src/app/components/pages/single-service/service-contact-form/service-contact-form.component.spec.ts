import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContactFormComponent } from './service-contact-form.component';

describe('ServiceContactFormComponent', () => {
  let component: ServiceContactFormComponent;
  let fixture: ComponentFixture<ServiceContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
