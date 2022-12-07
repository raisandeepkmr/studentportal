import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuUpdateInformationComponent } from './stu-update-information.component';

describe('StuUpdateInformationComponent', () => {
  let component: StuUpdateInformationComponent;
  let fixture: ComponentFixture<StuUpdateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuUpdateInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
