import { Component, DoCheck, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartdataService } from '../services/cartdata.service';
import { ProductsdataService } from '../services/productsdata.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private productData: ProductsdataService,
              private _cartdata: CartdataService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.productdata = this.productData.mobileArray;
    // console.log(this.productdata);
  }

  nameSearch = '';
  sortbyParam = 'price';
  sortbyOrder = 'asc';
  typeOfProduct='mobile';
  productdata:any[] = []


  changeValue(val:string){
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

  showDeatil(id: any) {
    if (this.typeOfProduct === 'mobile') {
      this.productData.fetchById_InMobileArray(id);
    }
    else if (this.typeOfProduct === 'laptop') {
      this.productData.fetchById_InLaptopArray(id);
    }
    else {
      this.productData.fetchById_InClothingarray(id);
    }
  }

  alerts: any[] = [];

  AddToCart(item: any) {
    this._cartdata.AddingToCart(item);
    if (this._cartdata.count == 0) {
      this.snackBar.open('Product adde to cart', '', {duration: 2000});
    }
    else {
      this.snackBar.open('Already exists in cart!!', 'OK', {duration: 2000, panelClass: ['blue-snackbar']})
      this._cartdata.count = 0;
    }
  }

}
 
