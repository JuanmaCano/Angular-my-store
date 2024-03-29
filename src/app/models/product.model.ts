export interface Category {
	id: string;
	name: string;
}

export interface Product {
	id: string;
	title: string;
	price: number;
	images: string[];
	description: string;
	category: Category;
}

export interface ProductDTO extends Omit<Product, 'id' | 'category'> {
	categoryId: number;
}

// all attributes are optional
// Partial
export interface UpdateProductDTO extends Partial<ProductDTO> {}
