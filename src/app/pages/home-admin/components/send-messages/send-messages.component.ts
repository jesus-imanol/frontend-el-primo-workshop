import { Component, OnInit } from '@angular/core';
import { Cita } from '../../models/cita';
import { AppointmentsService } from '../../services/appointments.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
      username: new FormControl(''),
      mensaje: new FormControl(''),
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
    const citaId = this.messages.get('selectedCitaId')?.value;
    const mensaje = this.messages.get('mensaje')?.value;

    if (citaId && mensaje) {
      this.appointmentsService.sendMessage(citaId, mensaje).subscribe(
        response => {
          alert("Mensaje enviado correctamente");
          this.messages.reset();
        },
        error => {
          alert("Ocurrió un error al enviar el mensaje");
        }
      );
    } else {
      alert("Por favor, complete todos los campos");
    }
  }
}
