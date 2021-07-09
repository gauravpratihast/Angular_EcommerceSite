import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private route: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(localStorage.getItem('adminList') != null){
      // let adminList = JSON.parse(localStorage.getItem('adminList') || '{}');
      // localStorage.setItem('adminList', JSON.stringify(this.newAdminList))
      console.log(this.newAdminList);

    }
  }

  login: boolean = false;
  typeOfUser = 'user';
  alerts: any[] = [];
  closeAlert(alert: any) {
    this.alerts.splice(0, this.alerts.length);
  }
  alerts2: any[] =[];
  closeAlert2(alert: any) {
    this.alerts2.splice(0, this.alerts2.length);
  }

  alertFunction(item: string) {
    this.alerts.push({ message: item });
    setTimeout(() => {
      this.closeAlert(this.alerts);
    }, 2000);
  }

  alertFunction2(item: string) {
    this.alerts2.push({ message: item });
    setTimeout(() => {
      this.closeAlert2(this.alerts2);
    }, 2000);
  }

  onSubmit(form: NgForm) {
    // console.log('submit');
    let email = form.value.email;
    let password = form.value.password;
    // form.resetForm();
    this.auth.authorizedUsers.find(item => {
      if (email === item.email && password === item.password) {
        this.auth.isloggedIn = true;
        // this.auth.loginUser.push(item.username);
        // console.log(this.auth.loginUser);
      }
      else if (email === item.email && password != item.password) {
        this.alertFunction("User Passward didn't match");
        this.auth.isloggedIn = false;
      }
      else if (email != item.email && password === item.password) {
        this.alertFunction("User Email didn't match");
        this.auth.isloggedIn = false;
      }
      else {
        this.auth.isloggedIn = false;
      }
    });
    this.auth.admin.find(item => {
      if (email === item.email && password === item.password) {
        this.auth.adminloggedIn = true;
        this.auth.loginUser.push(item.username);
        // console.log(this.auth.loginUser);
      }
      else if (email === item.email && password != item.password) {
        this.alertFunction("Admin Passward didn't match");
        this.auth.adminloggedIn = false;
      }
      else if (email != item.email && password === item.password) {
        this.alertFunction("Admin Email didn't match");
        this.auth.adminloggedIn = false;
      }
      else {
        this.auth.adminloggedIn = false;
      }
    });
    if(email === '' || password === ''){
      this.alertFunction('Fill credentials first')
    }
    else if (this.auth.isloggedIn) {
      this.route.navigate(['/products']);
      this.snackBar.open('User logged in', '', { duration: 2000 })
    }
    else if (this.auth.adminloggedIn) {
      this.route.navigate(['/admin']);
      this.snackBar.open('Admin logged in', '', { duration: 2000 });
    }
    else if((!this.auth.adminloggedIn && !this.auth.isloggedIn) && (email != '' && password != '')) {
      this.alertFunction("You didn't regestred")
      form.resetForm();
    }
  }

  SignUp(form: NgForm) {
    // console.log('sign up')
    let username = form.value.username;
    let email = form.value.email;
    let password = form.value.password;
    let confirmpass = form.value.repassword;
    if (!form.valid) {
      this.alertFunction2('Fill the form');
    }
    else {
      form.resetForm();
      if (password === confirmpass) {
        const new_user = [
          {
            username: username,
            email: email,
            password: password
          }
        ];
        if (this.typeOfUser === 'admin') {
          this.auth.admin.find(item => {
            if (item.email === email) {
              this.alertFunction2("Email is already in use");
            }
            else {
              this.auth.admin.push(new_user[0]);
              this.newAdminList = JSON.parse(localStorage.getItem('adminList') || '{}');
              this.newAdminList.push(new_user[0]);
              localStorage.setItem('adminList', JSON.stringify(this.newAdminList));
              this.snackBar.open('Admin registered', '', { duration: 2000 });
              new_user.splice(0, new_user.length);
            }
          });
        }
        else {
          this.auth.authorizedUsers.find(item => {
            if (item.email === email) {
              this.alertFunction2("Email is already in use");
            }
            else {
              this.auth.authorizedUsers.push(new_user[0]);
              this.snackBar.open('User registered', '', { duration: 2000 });
              new_user.splice(0, new_user.length);
            }
          });
        }
      }
      else {
        this.alertFunction('Password didnot match');
      }
    }
  }

  newAdminList:any[] = [];
  
}
