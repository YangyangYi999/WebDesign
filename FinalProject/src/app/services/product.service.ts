import { Injectable }    from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';


import { Product } from '../models/product';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private productsUrl = 'http://localhost:3000/products';  // URL to web api

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductResponse>(this.productsUrl)
               .map(response => {
                return response.obj as Product[];
               })
               .catch((error) => Observable.throw(error));
  }

  getType(t: string) {
    const type = `${t}`;
    return type;
    // return this.http.get<ProductResponse>(this.productsUrl)
    //            .map(response => {
    //             return response.obj as Product[];
    //            })
    //            .catch((error) => Observable.throw(error));
  }

  addProductToCart(product: Product) {
    const body = JSON.stringify(product);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.post('http://localhost:3000/user/cart/' + product._id + token, body, {headers: headers})
      .map((result) => {
        // const msg =  new Message(
        //   result.obj.content,
        //   result.obj.user.firstName,
        //   result.obj._id,
        //   result.obj.user._id);
        // this.messages.push(msg);
        // return msg;
      })
      .catch(error => {
        console.log(error.error);
        // this.errorService.handleError(error.error);
        return Observable.throw(error.error);
      });
  }

}

interface ProductResponse {
  message: string;
  obj: Array<Product>;
}
