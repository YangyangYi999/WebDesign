export class Product {
    constructor(public id: string,
        public name: string,
        public description: string,
        public addedTime: Date,
        public type: string,
        public rate?: number,
        public itemList?: Item) {}
}

export interface Item {

    size:{
        s: Number;
        m: Number;
        l: Number;
        xl: Number;
    },
    color: [{
        url: string;
        name: string;
    }],
    price: {
        s: Number;
        m: Number;
        l: Number;
        xl: Number;
    }
}