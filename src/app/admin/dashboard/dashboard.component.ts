import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { Dialog2Component } from 'src/app/dialog2/dialog2.component';
import { ProductsdataService } from 'src/app/services/productsdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private productData: ProductsdataService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productdata = this.productData.mobileArray;
  }
  openDialog(select: any){
    this.dialog.open(DialogComponent, {data: {select: select}});
    // console.log(select);
  }

  EditProduct(item: any, select: any){
    this.dialog.open(Dialog2Component, {data: {item : item, select : select}});
  }

  typeOfProduct='mobile';
  productdata:any[] = []
  changeValue(val: string){
    this.productdata = [];
    if(val === 'clothing'){
      this.productdata = this.productData.clothingArray;
      // console.log(this.productdata);
    }
    else if(this.typeOfProduct === 'laptop'){
      this.productdata = this.productData.laptopArray;
      // console.log(this.productdata);
    }
    else{
      this.productdata = this.productData.mobileArray;
      // console.log(this.productdata);
    }
  }

  DeletedsnackBar(){
    this.snackBar.open('Product Deleted', 'Dismiss', {duration: 2000});
  }

  delete(id: any, select: string){
    if(select === 'mobile'){
      let index = this.productData.mobileArray.findIndex(x => x.id === id);
      this.productData.mobileArray.splice(index, 1);
      this.DeletedsnackBar();
    }
    else if(select === 'laptop'){
      let index = this.productData.laptopArray.findIndex(x => x.id === id);
      this.productData.laptopArray.splice(index, 1);
      this.DeletedsnackBar();
    }
    else{
      let index = this.productData.clothingArray.findIndex(x => x.id === id);
      this.productData.clothingArray.splice(index, 1);
      this.DeletedsnackBar();
    }
  }
}
