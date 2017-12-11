import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService} from '../services/product.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { convertToParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {

  products: Product[] = [];
  type: string;


    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private productService: ProductService) { }
  
    ngOnInit(): void {
      this.type = this.route.snapshot.params["productType"]
      console.log(this.type);
      // this.route.paramMap
      // .switchMap((params: ParamMap) => params.get('productType'))
      // .subscribe(productType =>
      //   {
      //     this.type = productType;
      //     console.log(this.type)
      //   })

      this.productService
        .getProducts()
        .subscribe(products => 
          {
            this.products = products;
            // console.log(this.products)
          })
    }
}
