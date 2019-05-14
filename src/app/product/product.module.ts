import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./ProductComponent";
import { ProductListComponent } from '../product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [    
    ProductComponent, 
    ProductListComponent],

  exports:[ProductListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class ProductModule { }
