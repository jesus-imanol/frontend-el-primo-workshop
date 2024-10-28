import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServiceRegisterService } from '../../services/service-register.service';
import { IUser } from '../../models/iuser';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  constructor(private serviceRegister:ServiceRegisterService){
    this.registerForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl(''),
      fullName : new FormControl(''),
      role: new FormControl('Cliente')
    });
  }
  sendRegister(){
    let client : IUser = this.registerForm.value;
    console.log(client);
    
    if(this.serviceRegister.register(client)){
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
      })
    }
  }
}
