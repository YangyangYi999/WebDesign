import { Product } from './product'

export class Cart {
    constructor(        
        public productList: Array<Product>
    ) {}
}