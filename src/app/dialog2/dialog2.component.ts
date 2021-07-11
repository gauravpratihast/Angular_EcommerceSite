import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsdataService } from '../services/productsdata.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private productData: ProductsdataService,
              private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<Dialog2Component>) { }

  ngOnInit(): void {
    // console.log(this.data);
    // console.log(this.product_Description, this.select, this.price, this.productName);
  }

  id = this.data.item.id;
  price = this.data.item.price;
  productName = this.data.item.productName
  product_Description = this.data.item.product_Description;
  select = this.data.select;

  saveChanges(name: any, price: any, desc: any){
    if(this.select === 'mobile'){
      this.productData.fetchById_InMobileArray(this.id)[0].productName = name;
      this.productData.fetchById_InMobileArray(this.id)[0].price = price;
      this.productData.fetchById_InMobileArray(this.id)[0].product_Description = desc;
      // console.log(this.productData.fetchById_InMobileArray(this.id)[0].productName)
    }
    else if(this.select === 'laptop'){
      this.productData.fetchById_InLaptopArray(this.id)[0].productName = name;
      this.productData.fetchById_InLaptopArray(this.id)[0].price = price;
      this.productData.fetchById_InLaptopArray(this.id)[0].product_Description = desc;
    }
    else{
      this.productData.fetchById_InClothingarray(this.id)[0].productName = name;
      this.productData.fetchById_InClothingarray(this.id)[0].price = price;
      this.productData.fetchById_InClothingarray(this.id)[0].product_Description = desc;
    }
    this.snackBar.open('Changes Saved Sucessfully', '', {duration: 2000});
    this.dialogRef.close();
  }


}
