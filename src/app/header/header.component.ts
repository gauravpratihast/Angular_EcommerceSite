import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,
              private route: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  navList:any[]= [
    {
      routerLink: '',
      navItem: 'Home'
    },
    {
      routerLink: 'admin',
      navItem: 'Admin'
    },
    {
      routerLink: 'products',
      navItem: 'Products'
    },
    {
      routerLink: 'mycart',
      navItem: 'My Cart'
    },
    {
      routerLink: 'login',
      navItem: 'LogIn'
    },
    {
      routerLink: '',
      navItem: 'Log Out'
    }
  ]

  logout(navItem:string){
    if(navItem==='Log Out'){
      this.auth.isloggedIn = false;
      this.auth.adminloggedIn = false;
      this.route.navigate(['/login']);
      this.snackBar.open('Log Out Sucessfully', '', {duration: 2000});
    }
  }

  isVisible(navItem:string){
    if(this.auth.isloggedIn){
      if(navItem === 'LogIn' || navItem === 'Admin'){
        return false;
      }
      return this.auth.isloggedIn;
    }
    else if(this.auth.adminloggedIn){
      if(navItem === 'Admin'){
        return true;
      }
      if(navItem === 'LogIn'){
        return false;
      }
      return this.auth.adminloggedIn;
    }
    else{
      if(navItem === 'Home' || navItem === 'LogIn'){
        return true;
      } 
      return false;
    }
  }

}
