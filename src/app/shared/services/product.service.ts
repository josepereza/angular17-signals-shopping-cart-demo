import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {faker} from "@faker-js/faker";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  getProducts(): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < 50; i++) {
      products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.number.float({min: 0, max: 1000}),
        category: faker.commerce.department(),
        imageUrl: 'https://source.unsplash.com/featured/300x300'
      });
    }
    return products;
  }
}
