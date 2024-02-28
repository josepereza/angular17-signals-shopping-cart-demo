import {Component, computed} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/cart-item.model";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartQuantity = computed(() => {
    return this.cartService.cart().reduce((acc, cartItem: CartItem) => acc + cartItem.quantity, 0);
  });

  constructor(private cartService: CartService) {
  }
}
