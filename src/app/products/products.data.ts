import faker from 'faker';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const count = 30;
const data = [];

for (let i = 0; i < count; i++) {
  data.push({
    id: faker.random.number(),
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    isNew: faker.random.boolean(),
    country: faker.random.arrayElement(['USA', 'EU', 'ASIA', 'NONE']),
  });
}

export const getProducts = function() {
  return timer(1000).pipe(mapTo(data));
};
