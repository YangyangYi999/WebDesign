import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
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
import { RegisterComponentComponent } from './register-component/register-component.component';


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
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
