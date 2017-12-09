export class Product {
    constructor(public id: string,
        public name: string,
        public description: string,
        public addedTime: Date,
        public type: string,
        public rate?: number,
        public itemList?: Array<Item>) {}
}

export class Item {
    constructor(public size: string,
        public color: string,
        public url: string,       
        public quantity?:number,
        public price?: number){} 
}