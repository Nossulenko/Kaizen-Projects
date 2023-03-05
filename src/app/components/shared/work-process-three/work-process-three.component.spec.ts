import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProcessThreeComponent } from './work-process-three.component';

describe('WorkProcessThreeComponent', () => {
  let component: WorkProcessThreeComponent;
  let fixture: ComponentFixture<WorkProcessThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkProcessThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProcessThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
