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
  ) { }

  ngOnInit() {
    console.log('ProductsComponent ngOnInit!')
    this.fetchProducts();
    this.products$ = this.productsQuery.selectAll();
    this.isLoading$ = this.productsQuery.selectLoading();

    this.productsQuery.filtersChange$.pipe(
      untilDestroyed(this)
    ).subscribe(filters => {
      console.log(filters);
    });
  }

  private fetchProducts() {
    if (!this.productsQuery.hasEntity()) {
      console.log('fetchProducts!')
      this.productsService.get();
    }
  }
}
