import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqOneComponent } from './faq-one.component';

describe('FaqOneComponent', () => {
  let component: FaqOneComponent;
  let fixture: ComponentFixture<FaqOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
