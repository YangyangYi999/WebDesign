import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService} from '../services/product.service'

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss']
})
export class ItemComponentComponent implements OnInit {

  products: Product[] = [];
  
    constructor(private productService: ProductService) { }
  
    ngOnInit(): void {
      this.productService.getProducts()
        .subscribe(products => this.products = products.slice(0,4));
    }
}
