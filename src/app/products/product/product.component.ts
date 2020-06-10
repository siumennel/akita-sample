import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../state/product.model';

@Component({
  selector: 'app-product',
  template: `
  <div class="card" *ngIf="product">
   <div class="card-body">
    <h5 class="card-title">{{ product.title }}</h5>
    <p class="card-text">{{ product.price }}$</p>
  </div>
  </div>
  
  `,
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
}
