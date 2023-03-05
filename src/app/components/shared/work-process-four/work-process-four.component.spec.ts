import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessFourComponent } from './work-process-four.component';

describe('WorkProcessFourComponent', () => {
  let component: WorkProcessFourComponent;
  let fixture: ComponentFixture<WorkProcessFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkProcessFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
