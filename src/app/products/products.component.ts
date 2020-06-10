import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { Product } from './state/product.model';
import { ProductsQuery } from './state/products.query';
import { ProductsService } from './state/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
@UntilDestroy()
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private productsQuery: ProductsQuery,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    console.log('ProductsComponent ngOnInit!');
    this.fetchProducts();
    this.products$ = this.productsService.filtersProduct.selectAllByFilters() as Observable<
      Product[]
    >;
    this.isLoading$ = this.productsQuery.selectLoading();

    this.productsQuery.filtersChange$
      .pipe(untilDestroyed(this))
      .subscribe((filters) => {
        console.log(filters);
        this.productsService.filtersProduct.setFilter({
          id: 'filter1',
          value: filters,
          order: 1,
          predicate: (entity, value, index) => {
            if (filters.location && entity.country !== filters.location) {
              return false;
            }

            if (!filters.condition.new && !filters.condition.used) {
              return true;
            }

            if (entity.isNew && !filters.condition.new) {
              return false;
            }
            if (!filters.condition.used && !entity.isNew) {
              return false;
            }

            return true;
          },
        });
      });
  }

  private fetchProducts() {
    if (!this.productsQuery.hasEntity()) {
      console.log('fetchProducts!');
      this.productsService.get();
    }
  }
}
