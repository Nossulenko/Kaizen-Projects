import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaOneComponent } from './cta-one.component';

describe('CtaOneComponent', () => {
  let component: CtaOneComponent;
  let fixture: ComponentFixture<CtaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
