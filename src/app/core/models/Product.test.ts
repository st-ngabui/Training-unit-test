import { Order } from './Product';
import { productList, product1, product2, product2Update } from '../constants/data-test';

describe('test product order', () => {
  let order;
  beforeEach(() => {
    order = new Order(productList);
  });
  describe('add product', () => {
    it ('addProduct success', () => {
      order.addProduct(product2);
      expect(order.getProductList()).toHaveLength(2);
      expect(order.getProductList()).toContain(product2);
    });
  });

  describe('get product', () => {
    it('getProduct success', () => {
      expect(order.getProduct('1')).toEqual(product1);
      expect(order.getProduct('2')).toBeUndefined;
    });
  });

  describe('remove product', () => {
    it('removeProduct success', () => {
      order.removeProduct('1');
      expect(order.getProductList()).not.toContain(product1);
    });
  });

  describe('update product', () => {
    it('updateProduct success', () => {
      order.addProduct(product2);
      order.updateProduct(product2Update);
      expect(order.getProductList()).toContain(product2Update);
      expect(order.getProductList()).not.toContain(product2);
    });
  });

  describe('getTotalPayment', () => {
    it('getTotalPayment success', () => {
      expect(order.getTotalPayment()).toEqual(67500);
      order.addProduct(product2);
      expect(order.getTotalPayment()).toEqual(138780);
    });
  });
});
