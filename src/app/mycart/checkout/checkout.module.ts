import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from "@angular/material/select"; 
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    MatRadioModule
  ]
})
export class CheckoutModule { 
  constructor(){
    console.log('checkout loads');
  }
}
