import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoTwoComponent } from './promo-two.component';

describe('PromoTwoComponent', () => {
  let component: PromoTwoComponent;
  let fixture: ComponentFixture<PromoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
