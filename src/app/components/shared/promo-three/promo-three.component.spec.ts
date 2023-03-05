import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoThreeComponent } from './promo-three.component';

describe('PromoThreeComponent', () => {
  let component: PromoThreeComponent;
  let fixture: ComponentFixture<PromoThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
