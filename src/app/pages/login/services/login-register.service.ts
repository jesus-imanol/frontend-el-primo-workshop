import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../models/iuser-login';
import Swal from 'sweetalert2';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  private readonly url = 'http://98.80.95.233:3000/api/users/login';
  private response = '';
  constructor(private http: HttpClient, private router: Router) { }

 login(userLogin: IUserLogin){
  this.http.post<any>(this.url, userLogin).pipe(tap({
    next: (responses) => {
      console.log(responses);
      localStorage.setItem("username",JSON.stringify(responses.user))
      if(responses.message === "Login exitoso"){
        Swal.fire({
          icon: 'success',
          title: 'Login exitoso',
          text: 'Bienvenido ' + userLogin.username
        })
      }
      else {;
        Swal.fire({
          icon: 'error',
          title: 'username o password incorrectos',
        })
      }
      console.log(" this is responses ",responses);
             
    },
    error: (data) => {
      //this for alternate
      console.log(data);
      alert("user and password incorrectos");
       // error is here, but we can only call side things.
    }, 
})).subscribe()
    
  /*  {
    next: (data) => {
      this.response = data.message 
      console.log(this.response);
      
      if(this.response == 'Login exitoso'){
        localStorage.setItem('username',userLogin.username);
        Swal.fire({
          icon: 'success',
          title: 'Login exitoso',
          text: 'Bienvenido ' + userLogin.username
        })
        this.router.navigate(['/appointment']);
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'username o password incorrectos',
        })
      }
    },
    error: (err) => this.response = err
  });
*/
 }

 
}
