import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceTabComponent } from './price-tab.component';

describe('PriceTabComponent', () => {
  let component: PriceTabComponent;
  let fixture: ComponentFixture<PriceTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
