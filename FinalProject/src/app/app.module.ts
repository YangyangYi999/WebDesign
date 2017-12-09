import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { DetailComponent } from './detail/detail.component';
import { ViewOrderComponent } from './view-order/view-order.component';

import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ItemComponentComponent } from './item-component/item-component.component';
import { OrdersComponentComponent } from './orders-component/orders-component.component';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';
import { MyShopAppComponent } from './my-shop-app/my-shop-app.component';
import { FilterComponent } from './filter/filter.component';
import { PaymentComponent } from './payment/payment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    DetailComponent,
    ViewOrderComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ItemComponentComponent,
    OrdersComponentComponent,
    CheckoutComponentComponent,
    MyShopAppComponent,
    FilterComponent,
    PaymentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
