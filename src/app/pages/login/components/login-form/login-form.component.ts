import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormControl,FormGroup,Validator } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm : FormGroup;
  constructor(){
    this.loginForm = new FormGroup({
      username : new FormControl(''),
      password : new FormControl(''),
    })
  }
}
