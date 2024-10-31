import { HttpClient } from '@angular/common/http';
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
  // En appointments.service.ts

sendMessage(citaId: number, mensaje: string): Observable<any> {
  const url = `${this.url}/message`;
  return this.http.post<any>(url, { citaId, mensaje });
}


  getCitasByClientId(userId: number): Observable<{ status: boolean; data: Cita[] }> {
    return this.http.get<{ status: boolean; data: Cita[] }>(`${this.url}/client/${userId}`);
  }

  updateAppointmentStatus(id: number, status: number): Observable<any> {
    const url = `http://localhost:3000/api/appointment/status/${id}`;
    return this.http.put<any>(url, { status });
  }
}
