import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../services/product.service';

import 'rxjs/add/operator/switchMap';
import { Product } from '../models/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productID: string;
  product: Product;
  selectedSize: string;
  selectedColor: string;
  size: string[]=["s","m","l","xl"];
  color: object[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService
  ) { }

  ngOnInit() {
    // this.productID = this.route.snapshot.params["productID"]
    // console.log(this.productID);
    this.route.paramMap
    .switchMap((params: ParamMap) => params.getAll('productID'))
    .subscribe(productID =>
      {
        // this.productID = productID;
        // console.log(this.productID)
        this.service
        .getProduct(productID)
        .subscribe(product => 
          {
            this.product = product;
            this.color = product.itemList.color;
            console.log(this.color);
            console.log(this.product)            
          })
      })
  }


}
