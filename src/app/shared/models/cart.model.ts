import { CartItem } from './cartItem.model';

export class Cart {
	constructor(public userId?: string,
				public status?: string,
				public total?: number,
				public date?: string,
				public items?: CartItem[],
				public id?: string) {}
}