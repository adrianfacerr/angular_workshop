import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from './iproduct.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product1: any;
  @Output()
  public myOutput$ = new EventEmitter<MouseEvent>();
  public showDetails = true;
  public handleClick(event: MouseEvent) {
    this.myOutput$.emit(event);
  }
}
