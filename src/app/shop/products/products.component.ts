import {Component, OnInit} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Product} from "../../shared/models/product.model";
import {MatButtonModule} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInput, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
