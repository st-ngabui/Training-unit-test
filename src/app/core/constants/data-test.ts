import { Product } from '../models/Product';

export const product1 = {
  id: '1',
  name: 'apple',
  price: 15000,
  number: 5,
  discount: [
    {
      percent: 5,
      number: 2,
    },
    {
      percent: 10,
      number: 5,
    }
  ]
};

export const productList: Product[] = [product1];

export const product2: Product = {
  id: '2',
  name: 'orrange',
  price: 27000,
  number: 3,
  discount: [
    {
      percent: 12,
      number: 3,
    },
    {
      percent: 20,
      number: 6,
    }
  ]
};

export const product2Update: Product = {
  id: '2',
  name: 'orrange',
  price: 28000,
  number: 5,
  discount: [
    {
      percent: 12,
      number: 3,
    },
    {
      percent: 20,
      number: 6,
    }
  ]
};
