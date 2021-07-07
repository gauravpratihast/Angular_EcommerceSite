import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClothingComponent } from './clothing/clothing.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: ProductsComponent},
    {path: 'mobile/:id', component: MobileComponent},
    {path: 'laptop/:id', component: LaptopComponent},
    {path: 'clothing/:id', component: ClothingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
