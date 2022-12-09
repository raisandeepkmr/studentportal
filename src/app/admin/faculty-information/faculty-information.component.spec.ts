import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyInformationComponent } from './faculty-information.component';

describe('FacultyInformationComponent', () => {
  let component: FacultyInformationComponent;
  let fixture: ComponentFixture<FacultyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
