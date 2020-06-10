import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { CartItem } from './cart-item.model';
import { Cart } from './cart.model';

export interface CartState extends EntityState<CartItem, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'cart',
  idKey: 'productId'
})
export class CartStore extends EntityStore<CartState> {
  constructor() {
    super();
  }
}
