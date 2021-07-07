import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import { SidenavComponent } from './sidenav/sidenav.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
// import { ProductsdataService } from '../services/productsdata.service';
// import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent,
    DashboardComponent,
    HomeComponent,
    // SidenavComponent,
    // DashboardComponent,
    // CreateComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule
  
  ]
})
export class AdminModule {
  constructor(){
    console.log('admin loads')
  }
 }
