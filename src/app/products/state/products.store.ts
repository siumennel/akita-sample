import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductsState extends EntityState<Product> {
  ui: {
    filters: {
      condition: {
        new: boolean;
        used: boolean;
      },
      location: string;
    }
  }

}

const initialState: ProductsState = {
  ui: {
    filters: {
      condition: {
        new: false,
        used: false,
      },
      location: '',
    }
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends EntityStore<ProductsState, Product> {

  constructor() {
    super(initialState);
  }

}

