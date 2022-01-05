import { Component, OnInit } from '@angular/core';

import {
	Product,
	ProductDTO,
	UpdateProductDTO,
} from '../../models/product.model';

import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	myShoppingCart: Product[] = [];
	total = 0;
	products: Product[] = [];
	showProductDetail = false;
	productChoosen: Product = {
		id: '',
		price: 0,
		images: [],
		title: '',
		category: {
			id: '',
			name: '',
		},
		description: '',
	};

	constructor(
		private storeService: StoreService,
		private productsService: ProductsService
	) {
		this.myShoppingCart = this.storeService.getShoppingCart();
	}

	ngOnInit(): void {
		this.productsService.getAllProducts().subscribe((data) => {
			this.products = data;
		});
	}

	onAddToShoppingCart(product: Product) {
		this.storeService.addProduct(product);
		this.total = this.storeService.getTotal();
	}

	toggleProductDetail() {
		this.showProductDetail = !this.showProductDetail;
	}

	onShowDetail(id: string) {
		this.productsService.getProduct(id).subscribe((data) => {
			this.toggleProductDetail();
			this.productChoosen = data;
		});
	}

	createNewProduct() {
		const product: ProductDTO = {
			title: 'New article',
			images: [
				'https://placeimg.com/640/480/any?random=' + Math.random(),
			],
			description: 'new article description',
			price: 100,
			categoryId: 2,
		};
		this.productsService.createProduct(product).subscribe((data) => {
			//console.log('created', data);
			this.products.unshift(data);
		});
	}

	updateProduct() {
		const changes: UpdateProductDTO = {
			title: 'title changed',
		};
		const id = this.productChoosen.id;
		this.productsService.update(id, changes).subscribe((data) => {
			//console.log('updated', data);
			const index = this.products.findIndex(
				(item) => item.id === data.id
			);
			this.productChoosen = data;
			this.products[index] = data;
		});
	}

	deleteProduct() {
		const id = this.productChoosen.id;
		this.productsService.delete(id).subscribe(() => {
			const index = this.products.findIndex((item) => item.id === id);
			this.products.splice(index, 1);
			this.showProductDetail = false;
		});
	}
}
