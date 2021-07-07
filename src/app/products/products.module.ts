import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SearchingPipe } from '../pipes/searching.pipe';
import { SortingPipe } from '../pipes/sorting.pipe';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { ClothingComponent } from './clothing/clothing.component';


@NgModule({
  declarations: [
    ProductsComponent,
    SearchingPipe,
    SortingPipe,
    MobileComponent,
    LaptopComponent,
    ClothingComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class ProductsModule { }
