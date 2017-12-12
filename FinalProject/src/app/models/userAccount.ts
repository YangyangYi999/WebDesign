import { Product } from './product'

export class UserAccount {
  constructor(public email: string,
              public password: string,
              public firstName?: string,
              public lastName?: string,
              public cart?: Array<Product>) {
  }
}
