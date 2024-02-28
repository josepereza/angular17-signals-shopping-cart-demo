import {Component, computed, Input, OnInit} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {Product} from "../../../shared/models/product.model";
import {FormsModule} from "@angular/forms";
import {CurrencyPipe} from "@angular/common";
import {CartService} from "../../../shared/services/cart.service";
import {CartItem} from "../../../shared/models/cart-item.model";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  isInCart = computed(() => {
    return this.cartService.cart().some((cartItem: CartItem) => cartItem.product.id === this.product.id);
  });
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addProductToCart(this.product, this.quantity);
  }

  updateCartQuantity() {
    this.cartService.updateProductQuantity(this.product.id, this.quantity);
  }

  removeFromCart() {
    this.cartService.removeProductFromCart(this.product.id);
  }
}
