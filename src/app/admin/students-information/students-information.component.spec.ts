import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsInformationComponent } from './students-information.component';

describe('StudentsInformationComponent', () => {
  let component: StudentsInformationComponent;
  let fixture: ComponentFixture<StudentsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
