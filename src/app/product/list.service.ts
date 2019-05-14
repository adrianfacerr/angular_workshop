import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient){

  }
  getProducts(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:3000/products');
   }
}
