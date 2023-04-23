import { apple, appleUpdate, orangeUpdate, orange } from '../constants/data-test';
import { Order } from './Product';

describe('test product order', () => {
  describe('check order not have a product', () => {
    const order = new Order([]);
    expect(order.getProductList()).toHaveLength(0);
    expect(order.getTotalPayment()).toEqual(0);
  });
  describe('add apple to order', () => {
    const order = new Order([]);
    test('add a product', () => {
      order.addProduct(apple);
      expect(order.getProductList()).toHaveLength(1);
      expect(order.getProductList()).toContain(apple);
      expect(order.getTotalPayment()).toBe(67500);
    });
    test('update product have id in product list', () => {
      order.updateProduct(appleUpdate);
      expect(order.getProductList()).toHaveLength(1);
      expect(order.getProductList()).toContain(appleUpdate);
      expect(order.getTotalPayment()).toBe(135000);
    });
    test('update product do not have id in product list', () => {
      order.updateProduct(orangeUpdate);
      expect(order.getProductList()).toHaveLength(1);
      expect(order.getProductList()).not.toContain(orangeUpdate);
      expect(order.getTotalPayment()).toBe(135000);
    });
    test('delete product sucess', () => {
      order.removeProduct('1');
      expect(order.getProductList()).toHaveLength(0);
      expect(order.getTotalPayment()).toBe(0);
    });
  });

  describe('add apple and orrange to order', () => {
    const order = new Order([]);
    test('Add product success', () => {
      order.addProduct(apple);
      order.addProduct(orange);
      expect(order.getProductList()).toHaveLength(2);
      expect(order.getProductList()).toContain(orange);
      expect(order.getProductList()).toContain(apple);
    });
    test('test totalPayment with apply apply discount 1 & orange apply discount 1', () => {
      order.updateProduct({ ...apple, number: 3 });
      order.updateProduct({ ...orange, number: 4 });
      expect(order.getTotalPayment()).toBe(137790);
    });
    test('test totalPayment with apply apply discount 1 & orange apply discount 2', () => {
      order.updateProduct({ ...apple, number: 3 });
      order.updateProduct({ ...orange, number: 6 });
      expect(order.getTotalPayment()).toBe(172350);
    });
    test('test totalPayment with apply apply discount 2 & orange apply discount 1', () => {
      order.updateProduct({ ...apple, number: 6 });
      order.updateProduct({ ...orange, number: 4 });
      expect(order.getTotalPayment()).toBe(176040);
    });
    test('test totalPayment with apply apply discount 2 & orange apply discount 2', () => {
      order.updateProduct({ ...apple, number: 6 });
      order.updateProduct({ ...orange, number: 6 });
      expect(order.getTotalPayment()).toBe(210600);
    });
    test('delete apple', () => {
      order.removeProduct('1');
      expect(order.getProductList()).toHaveLength(1);
      expect(order.getTotalPayment()).toBe(129600);
    });
  });
});
