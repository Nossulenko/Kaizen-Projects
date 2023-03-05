import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJoinUsComponent } from './why-join-us.component';

describe('WhyJoinUsComponent', () => {
  let component: WhyJoinUsComponent;
  let fixture: ComponentFixture<WhyJoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyJoinUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyJoinUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
