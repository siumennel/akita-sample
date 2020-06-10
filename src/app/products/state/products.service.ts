import { AkitaFiltersPlugin } from 'akita-filters-plugin';

import { Injectable } from '@angular/core';
import { transaction } from '@datorama/akita';

import { getProducts } from '../products.data';
import { ProductsQuery } from './products.query';
import { ProductsState, ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  filtersProduct: AkitaFiltersPlugin<ProductsState>;
  constructor(
    private productsStore: ProductsStore,
    private productsQuery: ProductsQuery
  ) {
    this.filtersProduct = new AkitaFiltersPlugin<ProductsState>(
      this.productsQuery
    );
  }

  get() {
    getProducts().subscribe((products) => this.productsStore.set(products));
  }
}
