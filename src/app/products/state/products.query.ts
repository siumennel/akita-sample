import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductsStore, ProductsState } from './products.store';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsQuery extends QueryEntity<ProductsState, Product> {
  filtersChange$ = this.select(state => state.ui.filters);

  constructor(protected store: ProductsStore) {
    super(store);
  }
}
