import { Component, OnInit } from '@angular/core';
import { fromEvent, pipe} from 'rxjs';
import {map} from  'rxjs/operators'


@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const input= document.querySelector('#dummyinput');

    const obs$ = fromEvent(input, 'keyup');

    const observer = {
      next: data => console.log(data),
      complete: () => console.log("Complete!")
    }

    
    const recipe = pipe(
      map((evt: any) =>  evt.target.value));

    recipe(obs$)
    .subscribe(observer);


    }
  }
