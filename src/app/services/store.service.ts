import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class StoreService {
	private myShoppingCart: Product[] = [];

	constructor() {}

	addProduct(product: Product) {
		this.myShoppingCart.push(product);
	}

	getShoppingCart() {
		return this.myShoppingCart;
	}

	getTotal() {
		return this.myShoppingCart
			.map((item) => item.price)
			.reduce((a, b) => a + b);
	}
}
