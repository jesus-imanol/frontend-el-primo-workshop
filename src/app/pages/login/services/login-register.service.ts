import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../models/iuser-login';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  private readonly url = 'http://98.80.95.233:3000/api/users/login';
  constructor(private http: HttpClient) { }

 login(userLogin: IUserLogin): IUserLogin{
    let res = this.http.post<IUserLogin>(this.url, userLogin).subscribe(data => {
      if(data.username && data.password){
        Swal.fire({
          icon: 'success',
          title: 'Welcome',
          text: `Welcome ${data.username}`
        })
        localStorage.setItem('user', JSON.stringify(data.username));
        
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'password or username incorrect!'
        })
      }
    })
  return userLogin;
 }
 
}
