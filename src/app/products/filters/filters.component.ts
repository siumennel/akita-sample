import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersistNgFormPlugin } from '@datorama/akita';

import { ProductsQuery } from '../state/products.query';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  filters: FormGroup;
  persistForm: PersistNgFormPlugin;

  constructor(private productsQuery: ProductsQuery) { }

  ngOnInit() {
    console.log('FiltersComponent ngOnInit!')
    this.filters = new FormGroup({
      condition: new FormGroup({
        new: new FormControl(false),
        used: new FormControl(false),
        notSpecified: new FormControl(false)
      }),
      location: new FormControl()
    });

    this.persistForm = new PersistNgFormPlugin(
      this.productsQuery,
      'ui.filters')
      .setForm(this.filters);
  }

  reset() {
    // reset the current state to the initial value
    this.persistForm.reset();
  }

  ngOnDestroy() {
    this.persistForm.destroy();
  }

}
