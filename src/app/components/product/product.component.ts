import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
	@Input() product: Product = {
		id: '',
		title: '',
		price: 0,
		image: '',
		description: '',
		category: '',
	};

	@Output() addedProduct = new EventEmitter<Product>();

	constructor() {}

	ngOnInit(): void {}

	AddToCart() {
		this.addedProduct.emit(this.product);
	}
}
