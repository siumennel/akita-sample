import { Product } from 'src/app/products/state/product.model';

export type CartItem = {
  productId: Product['id'];
  quantity: number;
  total: number;
};
