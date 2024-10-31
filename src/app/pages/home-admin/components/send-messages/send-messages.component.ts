import { Component, OnInit } from '@angular/core';
import { Cita } from '../../models/cita';
import { AppointmentsService } from '../../services/appointments.service';
import { FormControl,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IMessage, IMessagePost } from '../../models/imessage';
import { tap } from 'rxjs';
@Component({
  standalone: true,
  selector: 'app-send-messages',
  templateUrl: './send-messages.component.html',
  styleUrls: ['./send-messages.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SendMessagesComponent implements OnInit {
  citas: Cita[] = [];
  filteredCitas: Cita[] = [];
  messages: FormGroup;

  constructor(private appointmentsService: AppointmentsService) {
    this.messages = new FormGroup({
      content: new FormControl(''),
      selectedCitaId: new FormControl('')
    });
  }

  ngOnInit() {
    this.obtenerCitas();
  }

  obtenerCitas() {
    this.appointmentsService.getCitas().subscribe(response => {
      if (response.status) {
        this.citas = response.data;
        this.filteredCitas = this.citas;
        localStorage.setItem('citasss', JSON.stringify(response.data));
      }
    });
  }

  buscarPorUsername(username: string) {
    this.filteredCitas = this.citas.filter(cita => cita.Detalles.includes(username));
  }

  enviarMensaje() {
    let mensaje : IMessagePost= {
      content: this.messages.get('content')?.value,
      appointmentId: this.messages.get('selectedCitaId')?.value,
      date: new Date().toLocaleDateString()
    };

    if (mensaje) {
      this.appointmentsService.sendMessage(mensaje).pipe(tap({
        next: (response) => {
          if (response.status) {
            alert("Mensaje enviado con éxito");
          } else {
            alert("Error al enviar el mensaje");
          }
        },
        error: (error) => {
          alert("Error al enviar el mensaje");
        }
      })
      ).subscribe()
    } else {
      alert("Por favor, complete todos los campos");
    }
  }
}
