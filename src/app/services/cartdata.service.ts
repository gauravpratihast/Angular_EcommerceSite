import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartdataService {

  constructor() { }

  products:any[] =[];

  count: number = 0;

  AddingToCart(productdetails:any){
    if(!this.products.includes(productdetails)){
      this.products.push(productdetails);
      sessionStorage.setItem('products', JSON.stringify(this.products));
    }
    else{
      this.count +=1;
    } 
  }

  totalprice = 0;
}
