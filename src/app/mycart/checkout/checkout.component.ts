import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartdataService } from 'src/app/services/cartdata.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private _cartData: CartdataService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.checkProduct();
  }
  sno = 1;
  completed = false;
  checkoutProducts: any;
  checkProduct() {
    this.checkoutProducts = this._cartData.products;
    for (let i = 0; i < this.checkoutProducts.length; i++) {
      this.checkoutProducts[i].imageLink = '../' + this.checkoutProducts[i].imageLink;
      this.checkoutProducts[i].id = this.sno;
      this.sno += 1;
      // console.log(this.checkoutProducts[i].imageLink)
    }
  }

  totalPrice = this._cartData.totalprice;

  onSubmit(form: any) {
    // console.log(form.value)
    this.completed = true;
  }

  confirm(form: NgForm) {
    this.snackBar.open('Your Order is Placed', '', { duration: 2000 })
    form.resetForm();
    this.checkoutProducts = [];
    this._cartData.products = [];

  }

}
