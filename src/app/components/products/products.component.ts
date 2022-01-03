import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
	total = 0;
	myShoppingCart: Product[] = [];
	products: Product[] = [];
	today = new Date();

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
}
