import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../models/cita';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  private url = 'http://98.80.95.233:3000/api/appointment';

  constructor(private http: HttpClient) {}

  getCitas(): Observable<{ status: boolean; data: Cita[] }> {
    return this.http.get<{ status: boolean; data: Cita[] }>(this.url);
  }

  updateAppointment(idCita: number, estado: number): Observable<{ status: boolean; data: Cita }> {
    const url = `${this.url}/${idCita}/status`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    });

    return this.http.patch<{ status: boolean; data: Cita }>(url, estado);
  }
}
