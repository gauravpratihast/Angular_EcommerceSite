import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {

  constructor() { 
    this.setToLocalStorage('mobileArray', this.mobileArray);
    this.setToLocalStorage('laptopArray', this.laptopArray);
    this.setToLocalStorage('clothingArray', this.clothingArray);
    // localStorage.setItem('mobileArray', JSON.stringify(this.mobileArray));
  }

  setToLocalStorage(name:string, data: any){
      let data_seralized = JSON.stringify(data);
      // console.log(data_seralized);
      localStorage.setItem(name, data_seralized)
    
  }

  mobileArray = [
    {
      id: 1,
      imageLink: '../../assets/images/micromax.png',
      price: 159,
      productName: 'Micromax',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 2,
      imageLink: '../../assets/images/nokia.png',
      price: 1000,
      productName: 'Nokia',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 3,
      imageLink: '../../assets/images/oppo.jpg',
      price: 1000,
      productName: 'Oppo',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 4,
      imageLink: '../../assets/images/phone.jpg',
      price: 100,
      productName: 'Phone',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 5,
      imageLink: '../../assets/images/redmi.jpg',
      price: 1000,
      productName: 'RedMI',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 6,
      imageLink: '../../assets/images/samsung.jpg',
      price: 2000,
      productName: 'SamSung',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 7,
      imageLink: '../../assets/images/11pro.jpg',
      price: 10000,
      productName: 'Iphone 11 pro',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 8,
      imageLink: '../../assets/images/blackzone.jpg',
      price: 1000,
      productName: 'BlackZone',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 9,
      imageLink: '../../assets/images/galaxy.jpg',
      price: 1000,
      productName: 'SamSung Galaxy',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 10,
      imageLink: '../../assets/images/iphone.jpg',
      price: 12000,
      productName: 'Iphone',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 11,
      imageLink: '../../assets/images/iphonex.jpg',
      price: 2000,
      productName: 'Iphone X',
      quantity: 2,
      product_Description: 'lorem gotcha'
    },
    {
      id: 12,
      imageLink: '../../assets/images/nokia.png',
      price: 11000,
      productName: 'Nokia',
      quantity: 2,
      product_Description: 'lorem gotcha'
    }
  ]

  laptopArray = [
    {
      id: 100,
      imageLink: '../../assets/images/acer.jpg',
      price: 10000,
      productName: 'Acer',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 101,
      imageLink: '../../assets/images/asus.jpg',
      price: 20000,
      productName: 'Asus',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 102,
      imageLink: '../../assets/images/hp.jpg',
      price: 10000,
      productName: 'HP',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 103,
      imageLink: '../../assets/images/lenovo.jpg',
      price: 100000,
      productName: 'Lenovo',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 104,
      imageLink: '../../assets/images/macbook.jpg',
      price: 150000,
      productName: 'MacBook',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 105,
      imageLink: '../../assets/images/nokialap.jpg',
      price: 16000,
      productName: 'Laptop',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 106,
      imageLink: '../../assets/images/pro11.jpg',
      price: 15000,
      productName: 'MacBook Pro',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 107,
      imageLink: '../../assets/images/pro13.jpg',
      price: 14000,
      productName: 'MacBook Pro 13',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 108,
      imageLink: '../../assets/images/windows.jpg',
      price: 13000,
      productName: 'Microsoft',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 109,
      imageLink: '../../assets/images/lap10.jpg',
      price: 12000,
      productName: 'Laptop 10',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 110,
      imageLink: '../../assets/images/lap11.jpg',
      price: 210000,
      productName: 'Air',
      quantity: 5,
      product_Description: 'lorem'
    },
    {
      id: 111,
      imageLink: '../../assets/images/lap12.jpg',
      price: 20000,
      productName: 'LapTop',
      quantity: 5,
      product_Description: 'lorem'
    }
  ]

  clothingArray = [
    {
      id: 200,
      imageLink: '../../assets/images/shirt.jpg',
      price: 100,
      productName: 'Long Shirt',
      quantity: 1,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 201,
      imageLink: '../../assets/images/shirt2.jpg',
      price: 150,
      productName: 'Shirt',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 202,
      imageLink: '../../assets/images/sgirt3.jpg',
      price: 99,
      productName: 'New One',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 203,
      imageLink: '../../assets/images/shirt4.jpeg',
      price: 300,
      productName: 'Stylist',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 204,
      imageLink: '../../assets/images/shirt5.jpg',
      price: 400,
      productName: 'Designed',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 205,
      imageLink: '../../assets/images/shirt6.jpg',
      price: 59,
      productName: 'Special',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 206,
      imageLink: '../../assets/images/shirt7.jpg',
      price: 100,
      productName: 'New Gen',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 207,
      imageLink: '../../assets/images/shirt9.jpg',
      price: 100,
      productName: 'Coming One',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 208,
      imageLink: '../../assets/images/shirt10.jpg',
      price: 100,
      productName: 'Special',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 209,
      imageLink: '../../assets/images/shirt11.jpg',
      price: 100,
      productName: 'Best One',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 210,
      imageLink: '../../assets/images/shirt12.webp',
      price: 100,
      productName: 'Wedding',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    },
    {
      id: 211,
      imageLink: '../../assets/images/shirt13.jpg',
      price: 49,
      productName: 'Home',
      quantity: 2,
      product_Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, natus!'
    }
  ]

  fetchById_InMobileArray(id: any){
    const list = JSON.parse(localStorage.getItem('mobileArray') || '{}').filter((Element: { id: any; })=>{
      return Element.id == id
    })
    return list
  }
  fetchById_InLaptopArray(id: any){
    const list = JSON.parse(localStorage.getItem('laptopArray') || '{}').filter((Element: { id: any; })=>{
      return Element.id == id
    })
    return list
  }
  fetchById_InClothingarray(id: any){
    const list = JSON.parse(localStorage.getItem('clothingArray') || '{}').filter((Element: { id: any; })=>{
      return Element.id == id
    })
    return list
  }
}
