import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentRegisteredComponent } from './appointment-registered.component';

describe('AppointmentRegisteredComponent', () => {
  let component: AppointmentRegisteredComponent;
  let fixture: ComponentFixture<AppointmentRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentRegisteredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
