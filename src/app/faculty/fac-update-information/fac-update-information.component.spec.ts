import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacUpdateInformationComponent } from './fac-update-information.component';

describe('FacUpdateInformationComponent', () => {
  let component: FacUpdateInformationComponent;
  let fixture: ComponentFixture<FacUpdateInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacUpdateInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacUpdateInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
