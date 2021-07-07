import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatMenuModule } from "@angular/material/menu";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";

const materialComponent =[
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatMenuModule,
  MatSnackBarModule,
  MatDialogModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
