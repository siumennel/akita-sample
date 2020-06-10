import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/products/state/product.model';
import { ProductsQuery } from 'src/app/products/state/products.query';

import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { CartItem } from './cart-item.model';
import { CartState, CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartQuery extends QueryEntity<CartState> {
  constructor(protected store: CartStore,
              private productsQuery: ProductsQuery) {
    super(store);
  }

  selectItems$ = combineLatest([
     this.selectAll(),
     this.productsQuery.selectAll()
   ]
  ).pipe(map(joinItems));
}

function joinItems([cartItems, products]: [CartItem[], Product[]]) {
  return cartItems.map(item => {
    const product = products[item.productId];
    return {
      ...item,
      ...product,
      total: item.quantity * product.price
    };
  });
}
