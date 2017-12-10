import { Product } from './product'
import {Order} from './order'

export class UserAccount {
    constructor(public email: string,
        public password: string,
        public firstName?: string,
        public lastName?: string,
        public orderList?: Array<string>) {}
}    
        
    