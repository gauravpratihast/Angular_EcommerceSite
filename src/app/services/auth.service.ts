import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    localStorage.setItem('adminList', JSON.stringify(this.admin));
    localStorage.setItem('userList', JSON.stringify(this.authorizedUsers));
   }

  authorizedUsers:any[] =[
    {
      username: 'Xyz',
      email: 'xy@gmail.com',
      password: '123456'
    }
  ]

  admin: any[] = [
    {
      username: 'UserName',
      email: 'abc@gmail.com',
      password: '12345678'
    }
  ]

  loginUser: any = [];

  isloggedIn = false;
  adminloggedIn = false;
}
