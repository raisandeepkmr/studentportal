import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsScheduleComponent } from './students-schedule.component';

describe('StudentsScheduleComponent', () => {
  let component: StudentsScheduleComponent;
  let fixture: ComponentFixture<StudentsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
