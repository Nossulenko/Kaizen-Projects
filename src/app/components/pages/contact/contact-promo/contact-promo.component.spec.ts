import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPromoComponent } from './contact-promo.component';

describe('ContactPromoComponent', () => {
  let component: ContactPromoComponent;
  let fixture: ComponentFixture<ContactPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
