import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoFiveComponent } from './promo-five.component';

describe('PromoFiveComponent', () => {
  let component: PromoFiveComponent;
  let fixture: ComponentFixture<PromoFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
