import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentDoComponent } from './appoinment-do.component';

describe('AppoinmentDoComponent', () => {
  let component: AppoinmentDoComponent;
  let fixture: ComponentFixture<AppoinmentDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppoinmentDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
