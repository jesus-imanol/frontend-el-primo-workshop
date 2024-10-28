import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormControl,FormGroup,Validator } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginRegisterService } from '../../services/login-register.service';
import { IUserLogin } from '../../models/iuser-login';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  response : string = '';
  loginForm : FormGroup;
  constructor(readonly loginService: LoginRegisterService){
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl(''),
    })
  }
  sendLogin() {
    let userLogin : IUserLogin= this.loginForm.value;
    this.loginService.login(userLogin);
  }
}
