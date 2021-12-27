import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
	product = {
		name: 'iPad Pro',
		image: './assets/ipad.jpg',
		price: 899,
	};
	constructor() {}

	ngOnInit(): void {}
}