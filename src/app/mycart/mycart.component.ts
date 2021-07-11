import { Component, DoCheck, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartdataService } from '../services/cartdata.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit, DoCheck {

  constructor(private _cartData: CartdataService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // console.log(this._cartData.products)
    
  }

  cartEmpty:boolean = true;

  productlist = this._cartData.products;
  // testing = 'working';


  deleteRow(id: number) {
    for (let i = 0; i < this.productlist.length; ++i) {
      if (this.productlist[i].id === id) {
        this.productlist.splice(i, 1);
      }
    }
    this.snackBar.open('Item Deleted!!', 'OK', { duration: 2000 })
  }

  addQuantity(id: any) {
    for (let i = 0; i < this.productlist.length; ++i) {
      if (this.productlist[i].id === id) {
        if(this.productlist[i].quantity < 10){
          this.productlist[i].quantity = Number(this.productlist[i].quantity) + 1;
        }
      }
    }
  }

  removeQuantity(id: any) {
    for (let i = 0; i < this.productlist.length; ++i) {
      if (this.productlist[i].id === id) {
        if(this.productlist[i].quantity > 1){
          this.productlist[i].quantity = Number(this.productlist[i].quantity) - 1;
        }
      }
    }
  }

  totalPrice: number = 0;

  computeTotal() {
    let totalPriceCart = 0;
    for (let cartItem of this.productlist) {
      totalPriceCart += cartItem.price * cartItem.quantity;
    }
    this.totalPrice = totalPriceCart;
  }

  ngDoCheck() {
    this.computeTotal();
    this._cartData.totalprice = this.totalPrice;
    if(this.productlist.length === 0){
      this.cartEmpty = true;
    }
    else{
      this.cartEmpty = false;
    }
  }
}
