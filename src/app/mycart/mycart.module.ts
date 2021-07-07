import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycartRoutingModule } from './mycart-routing.module';
import { MycartComponent } from './mycart.component';
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button"


@NgModule({
  declarations: [
    MycartComponent
  ],
  imports: [
    CommonModule,
    MycartRoutingModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class MycartModule { }
