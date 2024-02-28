import {Component, Signal, computed} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {CartService} from "../../shared/services/cart.service";
import {CartItem} from "../../shared/models/cart-item.model";
import {CurrencyPipe} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatListModule, CurrencyPipe, MatButtonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart: Signal<CartItem[]> = this.cartService.cart;
  cartTotal = computed(() => {
    return this.cart().reduce((acc, cartItem) => acc + cartItem.product.price * cartItem.quantity, 0);
  });
  constructor(private cartService: CartService) {
  }

  removeFromCart(productId: number) {
    this.cartService.removeProductFromCart(productId);
  }

  updateProductQuantity(productId: number, quantity: number) {
    this.cartService.updateProductQuantity(productId, quantity);
  }
}
