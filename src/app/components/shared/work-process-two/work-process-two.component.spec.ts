import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessTwoComponent } from './work-process-two.component';

describe('WorkProcessTwoComponent', () => {
  let component: WorkProcessTwoComponent;
  let fixture: ComponentFixture<WorkProcessTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkProcessTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
