import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, Validators,ValidatorFn, ValidationErrors ,AbstractControl } from '@angular/forms';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AppointmentServiceService } from '../../services/appointment-service.service';
@Component({
  selector: 'app-appoinment-do',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './appoinment-do.component.html',
  styleUrl: './appoinment-do.component.css'
})
export class AppoinmentDoComponent {
  sheduleForm:FormGroup;
  user = JSON.parse(localStorage.getItem('username') || '{}');
  
  constructor(readonly appointmentService: AppointmentServiceService){
    this.sheduleForm = new FormGroup({
      modelVersion: new FormControl(''),
      details: new FormControl(''),
      fast: new FormControl('no'),
      date: new FormControl('', [Validators.required, this.dateValidator]), // Corrección de validadores
      time: new FormControl('', [Validators.required, this.timeValidator]), // Corrección de validadores
      clientId: new FormControl(this.user.id),
      mechanicId: new FormControl(1),
      status: new FormControl(1),
    });
  }

  dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const dateValue = control.value;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return !dateRegex.test(dateValue) ? { invalidDate: true } : null;
  };
  
  timeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const timeValue = control.value;
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return !timeRegex.test(timeValue) ? { invalidTime: true } : null;
  };


  sendAppointment(){
     if (this.sheduleForm.invalid) {
      if (this.sheduleForm.controls['date'].hasError('invalidDate')) {
        Swal.fire({
          icon: 'error',
          title: 'Fecha inválida',
          text: 'Por favor, ingresa la fecha en formato YYYY-MM-DD.',
        });
      } else if (this.sheduleForm.controls['time'].hasError('invalidTime')) {
        Swal.fire({
          icon: 'error',
          title: 'Hora inválida',
          text: 'Por favor, ingresa la hora en formato HH:MM (24 horas).',
        });
      }
      return;
    }
    if(this.sheduleForm.value.fast === "si" || this.sheduleForm.value.fast === "Si"){
      this.sheduleForm.value.fast = 1;
    }
    else{
      this.sheduleForm.value.fast = 0;
    }
    this.appointmentService.addAppointment(this.sheduleForm.value)

  }

}
