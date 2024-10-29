import { Component } from '@angular/core';
import { AppointmentServiceService } from '../../services/appointment-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  cita = JSON.parse(localStorage.getItem('appointment') || '{}').data;
  status = ''
  constructor(private appointementService : AppointmentServiceService){}
ngOnInit(): void {
  this.appointementService.getAppointmentById(parseInt(this.cita.id))
  if(localStorage.getItem('status') === '1'){
      this.status = 'Programada'
  }
  if(localStorage.getItem('status') === '2'){
    this.status = 'En Progreso'
  }
  if(localStorage.getItem('status') === '3'){
    this.status = 'Completada'
  }
  if(localStorage.getItem('status') === '4'){
    this.status = 'Cancelada'
  }
  if(localStorage.getItem('status') === '5'){
    this.status = 'vehiculo recibido'
  }

}
}
