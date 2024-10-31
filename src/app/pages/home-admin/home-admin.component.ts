import { Component } from '@angular/core';
import { AppointmentRegisteredComponent } from './components/appointment-registered/appointment-registered.component';
import { SendMessagesComponent } from './components/send-messages/send-messages.component';

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [AppointmentRegisteredComponent,SendMessagesComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

}
