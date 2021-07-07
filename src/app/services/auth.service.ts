import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authorizedUsers:any[] =[
    {
      username: 'Gaurav',
      email: 'gp@21',
      password: '123456'
    }
  ]

  admin: any[] = [
    {
      username: 'abc',
      email: 'abc@1',
      password: '12345678'
    }
  ]

  isloggedIn = false;
  adminloggedIn = false;
}
