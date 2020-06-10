import { Injectable } from '@angular/core';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { CartStore, CartState } from './cart.store';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'carts' })
export class CartService extends CollectionService<CartState> {

  constructor(store: CartStore) {
    super(store);
  }

}
