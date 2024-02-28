import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./shop/products/products.component').then(c => c.ProductsComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./shop/cart/cart.component').then(c => c.CartComponent)
  }
];
