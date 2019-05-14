import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { DummyComponent } from './dummy/dummy.component';
// import { ProductComponent } from './product/product.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { IfDirective } from './if.directive';
// import { ZoomDirective } from './zoom.directive';
// import { CurrencyPipe } from './currencyPipe';

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
  ],
  imports: [
    BrowserModule,
    // SharedModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
