import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsdataService } from '../services/productsdata.service';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private productData: ProductsdataService) { }

  ngOnInit(): void {
    // console.log(this.select)
    this.myReactiveForm = new FormGroup({
      'image': new FormControl('', [Validators.required]),
      'name': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'price': new FormControl('', [Validators.required, Validators.pattern(this.regExForNumber)]),
      'description': new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }
  myReactiveForm!: FormGroup;
  regExForNumber = /^\d+(\.\d{1,2})?$/;
  alerts: any[] = [];
  selectedImage: any;
  showingImage:boolean=false;

  select = this.data.select;

  id = 0;
  findId(){
    if(this.select === 'mobile'){
      this.id = this.productData.mobileArray.length;
    }
    else if(this.select === 'laptop'){
      this.id = this.productData.laptopArray.length;
    }
    else{
      this.id = this.productData.clothingArray.length;
    }
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0].name;
    this.selectedImage = '../../assets/images/' + this.selectedImage;
    this.showingImage = true;
  }

  onSubmit(data: any){
    this.findId();
    const listFromInput = [
      {
        id: this.id+1,
        imageLink: this.selectedImage,
        price: data.price,
        productName: data.name,
        quantity: 1,
        product_Description: data.description
      }
    ];
    if(this.select === 'mobile'){
      this.productData.mobileArray.push(listFromInput[0]);
    }
    else if(this.select === 'laptop'){
      this.productData.laptopArray.push(listFromInput[0]);
    }
    else{
      this.productData.clothingArray.push(listFromInput[0]);
    }
    listFromInput.splice(0, listFromInput.length);
    this.myReactiveForm.reset(); 
    this.showingImage = false;
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'New Product Added Sucessfully'
    });
    setTimeout(() => {
      this.closeAlert(this.alerts);
    }, 2000);
  } 
  closeAlert(alert: any) {
    this.alerts.splice(0, this.alerts.length);
  }

}
