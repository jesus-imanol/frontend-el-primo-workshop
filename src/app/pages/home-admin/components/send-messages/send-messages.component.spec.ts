import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessagesComponent } from './send-messages.component';

describe('SendMessagesComponent', () => {
  let component: SendMessagesComponent;
  let fixture: ComponentFixture<SendMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
