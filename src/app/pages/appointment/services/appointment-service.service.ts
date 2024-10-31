import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppointment } from '../models/iappointment';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor(readonly http: HttpClient) { }
  private url = 'http://98.80.95.233:3000/api/appointment';

  addAppointment(appointment: IAppointment) {
    this.http.post<IAppointment>(this.url, appointment)
    .subscribe({
      next: (data) => {
        localStorage.setItem('appointment', JSON.stringify(data));
        Swal.fire({
          icon: 'success',
          title: 'Cita creada',
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear la cita',
          text: error.message || 'Hubo un problema al crear la cita.',
        });
      }
    });
  }
  getMessagesByAppointmentId(appointmentId: number) : Observable<any> {
    let urlMessages ="http://98.80.95.233:3000/api/message/appointment"
    return this.http.get<any>(`${urlMessages}/1`);
  }

  getAppointmentById(id: number) {
    return this.http.get<any>(`${this.url}/${id}`).subscribe(
   {   next: (response) => {
        localStorage.setItem('status', JSON.stringify(response.data.status))
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al obtener la cita',
          text: error.message || 'Hubo un problema al obtener la cita.',
        });
      }}
    )
  }
}

