import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycartComponent } from './mycart.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: MycartComponent},
    {path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycartRoutingModule { }
