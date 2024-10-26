import { Component } from '@angular/core';
import { AppoinmentDoComponent } from './components/appoinment-do/appoinment-do.component';
import { StatusComponent } from './components/status/status.component';
import { MessageComponent } from './components/message/message.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [AppoinmentDoComponent,StatusComponent,MessageComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

}
