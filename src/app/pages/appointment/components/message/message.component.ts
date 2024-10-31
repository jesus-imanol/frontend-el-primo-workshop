import { Component } from '@angular/core';
import { AppointmentServiceService } from '../../services/appointment-service.service';
import { IMessage } from '../../../home-admin/models/imessage';
import { tap } from 'rxjs';
import { CommonModule,NgFor } from '@angular/common';
@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  constructor(readonly appointementService: AppointmentServiceService ) {}
  messages: IMessage[] = [];
  cita = JSON.parse(localStorage.getItem('appointment') || '{}').data;
  ngOnInit(): void {
    this.getMessagesByAppointmentId()
  }
  getMessagesByAppointmentId() {
    this.appointementService.getMessagesByAppointmentId(parseInt(this.cita.id)).pipe(tap({
      next: (response) => {
        console.log("Mensajes",response);
        this.messages = response.data
        console.log("Mis mensajes",this.messages)
      },
      error: (error) => {
        console.log(error)
      }
    }))
    .subscribe();
  }
}
