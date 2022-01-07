import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

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

	getAllProducts(limit?: number, offset?: number) {
		let params = new HttpParams();
		if (limit && offset) {
			params.set('limit', limit);
			params.set('offset', offset);
		}
		return this.http.get<Product[]>(`${this.apiUrl}`, { params });
	}

	getProductsByPage(limit: number, offset: number) {
		return this.http.get<Product[]>(
			`${this.apiUrl}?limit=${limit}&offset=${offset}`
		);
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
