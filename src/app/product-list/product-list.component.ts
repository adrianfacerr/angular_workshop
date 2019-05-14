import { Component } from '@angular/core';
import { ListService } from '../product/list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  {
  protected products$ = new Observable<Array<any>>();

  constructor(public service: ListService) {
    this.products$ = service.getProducts();
  }

  public parentHandleClick($event) {
    console.log("Button Clicked!!!")
}
}
