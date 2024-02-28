import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";
import {CartService} from "./shared/services/cart.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shop-app';

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.fetchCart();
  }
}
