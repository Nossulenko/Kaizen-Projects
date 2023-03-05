import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFourComponent } from './cta-four.component';

describe('CtaFourComponent', () => {
  let component: CtaFourComponent;
  let fixture: ComponentFixture<CtaFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
