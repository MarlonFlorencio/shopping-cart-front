export class CartItem {
	constructor(public itemId: string,
				public name: string,
				public quantity: number,
				public price: number,
				public total: number) {}
}