import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { AppointmentsService} from '../../services/appointments.service';
import { CitaTransformada } from '../../models/cita-transformada';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-appointment-registered',
  standalone: true,
  templateUrl: './appointment-registered.component.html',
  styleUrls: ['./appointment-registered.component.css'],
  imports: [CommonModule,ButtonModule, CalendarModule, FormsModule, DialogModule,DropdownModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppointmentRegisteredComponent implements OnInit {
  fechaSeleccionada: Date | null = null;
  citas: CitaTransformada[] = [];
  citasDelDia: CitaTransformada[] = [];
  diasConCitas: { [key: number]: boolean } = {};
  mostrarModal: boolean = false;

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }
  estados: { label: string; value: number }[] = [
    { label: 'Pendiente', value: 1 },
    { label: 'Confirmado', value: 2 },
    { label: 'Cancelado', value: 3 },
    { label: 'Completado', value: 4 },
  ];
  
  estadoSeleccionado: number | null = null; 
  cargarCitas() {
    this.appointmentsService.getCitas().subscribe(response => {
      console.log(response);
      if (response.status) {
        this.citas = response.data.map(cita => {
          const fechaIso = new Date(cita.Fecha);
          return {
            fecha: new Date(fechaIso.getUTCFullYear(), fechaIso.getUTCMonth(), fechaIso.getUTCDate()), 
            hora: cita.Hora,
            name: `Cliente ${cita.ID_Cliente}`, 
            details: cita.Detalles,
            ID_Cita: cita.ID_Cita
          };
        });
        this.marcarDiasConCitas();
      }
    });
  }
  
  marcarDiasConCitas() {
    this.diasConCitas = {};
    this.citas.forEach(cita => {
      const dia = cita.fecha.getDate();
      this.diasConCitas[dia] = true;
    });
  }

  actualizarDiasConCitas(evento: any) {
    const { month, year } = evento;
    const citasDelMes = this.citas.filter(cita =>
      cita.fecha.getMonth() === month && cita.fecha.getFullYear() === year
    );
    
    this.diasConCitas = {};
    citasDelMes.forEach(cita => {
      const dia = cita.fecha.getDate();
      this.diasConCitas[dia] = true;
    });
  }

  mostrarCitasDelDia(fecha: Date) {
    this.fechaSeleccionada = fecha;
    this.citasDelDia = this.citas.filter(cita => {
      return cita.fecha.getDate() === fecha.getDate() &&
             cita.fecha.getMonth() === fecha.getMonth() &&
             cita.fecha.getFullYear() === fecha.getFullYear();
    });
  
    console.log("citas del dia",this.citasDelDia); 
  
    this.mostrarModal = true;
  }
  actualizarEstado(idCita: number, nuevoEstado: number) {
    this.appointmentsService.updateAppointment(idCita, nuevoEstado).subscribe(
      response => {
      },
      error => {
        console.error('Error al actualizar el estado de la cita:', error);
      }
    );
    console.log(`Actualizando cita ID: ${idCita} a estado: ${nuevoEstado}`);
  }
  
}
