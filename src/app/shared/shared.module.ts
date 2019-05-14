import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDirective } from './if.directive';
import { ZoomDirective } from './zoom.directive';
import { CurrencyPipe } from './currencyPipe';

@NgModule({
  declarations: [    
    IfDirective,
    ZoomDirective,
    CurrencyPipe],
    exports:[CurrencyPipe,ZoomDirective, IfDirective],
    
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
