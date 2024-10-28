import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/iuser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceRegisterService {
  private readonly url = 'http://98.80.95.233:3000/api/';
  constructor(readonly http:HttpClient) { }

  register(user:IUser) : IUser{
    let adress = this.url + 'users';
    let resp =  this.http.post<IUser>(adress, user)
    .subscribe(data => {
      localStorage.setItem('user', JSON.stringify(user.username));
      return data;
    }
    )
 
    return user;
  }
}
