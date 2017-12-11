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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

interface ProductResponse {
  message: string;
  obj: Array<Product>;
}