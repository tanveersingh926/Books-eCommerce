export class ShoppingCart {
    constructor(
        public subTotal: number,
        public tax: number,
        public total: number,
        public shipping: number
    ) {}
}
