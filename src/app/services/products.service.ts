import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
	Product,
	ProductDTO,
	UpdateProductDTO,
} from './../models/product.model';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

	constructor(private http: HttpClient) {}

	getAllProducts() {
		return this.http.get<Product[]>(`${this.apiUrl}?limit=50&offset=0`);
	}

	getProduct(id: string) {
		return this.http.get<Product>(`${this.apiUrl}/${id}`);
	}

	createProduct(dto: ProductDTO) {
		return this.http.post<Product>(this.apiUrl, dto);
	}

	update(id: string, dto: any) {
		// put --> enviar toda la info del producto
		// patch --> actualizar sólo un atributo del producto
		return this.http.put<Product>(`${this.apiUrl}/${id}`, dto);
	}

	delete(id: string) {
		return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
	}
}
