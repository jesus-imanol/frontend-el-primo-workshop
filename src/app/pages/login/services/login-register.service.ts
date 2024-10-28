import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../models/iuser-login';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  private readonly url = 'http://98.80.95.233:3000/api/users/login';
  private response = '';
  constructor(private http: HttpClient, private router: Router) { }

 login(userLogin: IUserLogin){
  this.http.post<any>(this.url, userLogin)
  .subscribe({
    next: (data) => {this.response = data.message},
    error: (err) => this.response = err
  });
  if(this.response == 'Login exitoso'){
    localStorage.setItem('username',userLogin.username);
    Swal.fire({
      icon: 'success',
      title: 'Login exitoso',
      text: 'Bienvenido ' + userLogin.username
    })
    this.router.navigate(['/appointment']);
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'username o password incorrectos',
    })
  }
 }

 
}
