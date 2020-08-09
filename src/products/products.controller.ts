import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): { id: string } {
    const id = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );

    return { id };
  }

  @Get()
  getProducts(): Array<Product> {
    return this.productsService.fetchProducts();
  }
}
