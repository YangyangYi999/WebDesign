import { Product } from './product'
import {Order} from './order'

export class UserAccount {
    constructor(public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public cart?: Array<Product>,
        public orderList?: Array<string>) {}
}    
        
    