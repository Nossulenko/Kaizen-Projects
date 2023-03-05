import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterWithBgComponent } from './footer-with-bg.component';

describe('FooterWithBgComponent', () => {
  let component: FooterWithBgComponent;
  let fixture: ComponentFixture<FooterWithBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterWithBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWithBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
