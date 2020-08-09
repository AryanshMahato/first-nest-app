import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct = (title: string, desc: string, price: number): string => {
    const id = Math.random().toString();
    const newProduct = new Product(id, title, desc, price);
    this.products.push(newProduct);

    return id;
  };

  fetchProducts = (): Array<Product> => {
    return [...this.products];
  };

  fetchProduct = (id: string): Product => {
    const product = this.products.find((product) => product.id === id);
    if (!product) throw new NotFoundException('Could not find Product');
    return product;
  };
}
