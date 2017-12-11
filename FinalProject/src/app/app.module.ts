import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {ProductService} from './services/product.service';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CartComponent} from './cart/cart.component';
import {DetailComponent} from './detail/detail.component';
import {ViewOrderComponent} from './view-order/view-order.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {ItemComponentComponent} from './item-component/item-component.component';
import {OrdersComponentComponent} from './orders-component/orders-component.component';
import {CheckoutComponentComponent} from './checkout-component/checkout-component.component';
import {FilterComponent} from './filter/filter.component';
import {PaymentComponent} from './payment/payment.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AccountComponent} from './account-component/account-component.component';
import {UserAccountService} from "./services/userAccount.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    DetailComponent,
    ViewOrderComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    ItemComponentComponent,
    OrdersComponentComponent,
    CheckoutComponentComponent,
    FilterComponent,
    PaymentComponent,
    PageNotFoundComponent,
    AccountComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, UserAccountService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
