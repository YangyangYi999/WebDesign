import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService} from '../services/product.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { filter } from 'rxjs/operator/filter';
import * as moment from 'moment';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {

  products: Product[] = [];
  type: string;
  filter: string;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private productService: ProductService) { }
  
    ngOnInit(): void {
      // this.type = this.route.snapshot.params["productType"]
      // console.log(this.type);
      this.route.paramMap
      .switchMap((params: ParamMap) => params.getAll('productType'))
      .subscribe(productType =>
        {
          this.type = productType;
          console.log(this.type)
          this.productService
          .getProducts()
          .subscribe(products => 
            {
              if(this.type!==undefined){
                this.products=[];
                if(this.type === "t-shirts"){
                  for(let i=0;i<products.length;i++){
                    if(products[i].type === "t-shirt")
                      this.products.push(products[i]);
                  }
                }else if(this.type === "dresses"){
                  for(let i=0;i<products.length;i++){
                    if(products[i].type === "dresses")
                      this.products.push(products[i]);
                  }
                }else if(this.type === "jackets"){
                  for(let i=0;i<products.length;i++){
                    if(products[i].type === "jackets")
                      this.products.push(products[i]);
                  }
                }
                // console.log(this.products)
              } 
            })
        })

        this.route.paramMap
        .switchMap((params: ParamMap) => params.getAll('filterType'))
        .subscribe(filterType =>
          {
            this.filter = filterType;
            console.log(this.filter)
            this.productService
            .getProducts()
            .subscribe(products => 
              {
                if(this.filter === "bestsellers"){
                  this.products = [];
                  for(let i=0;i<products.length;i++){
                    // console.log(products[i].rating)
                    if(products[i].rating === 5)
                      this.products.push(products[i]);
                  }
                }
                if(this.filter === "newarrivals"){
                  this.products = [];
                  let currentTime = "2017-12-30";
                  for(let i=0;i<products.length;i++){
                    // console.log(products[i].rating)
                    if(moment(products[i].addedTime).isAfter(currentTime, 'day')!== true){ // false
                      this.products.push(products[i]);
                      console.log(currentTime+products[i].addedTime);
                    }
                  }
                }
              })
          })

        if(this.type === undefined && this.filter === undefined)
          this.productService
              .getProducts()
              .subscribe(products => 
              {
                this.products = products;
                console.log(products);
              })
            }
}
