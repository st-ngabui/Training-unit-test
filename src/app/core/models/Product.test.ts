import { Order, Product } from './Product';

const data: Product = {
  id: '1',
  name: 'apple',
  price: 5000,
  number: 5,
  discount: [
    {
      percent: 5,
      number: 1,
    },
    {
      percent: 10,
      number: 2,
    }
  ]
};

const dataUpdate: Product = {
  id: '1',
  name: 'apple Gala',
  price: 10000,
  number: 10,
  discount: [
    {
      percent: 3,
      number: 2,
    },
    {
      percent: 5,
      number: 4,
    }
  ]
};
describe('test product order', () => {
  describe('add product', () => {
    const order = new Order([]);
    jest.spyOn(Order.prototype, 'addProduct');
    order.addProduct(data);
    it ('addProduct has been called', () => {
      expect(order.addProduct).toBeCalledTimes(1);
      expect(order.addProduct).toBeCalledWith(data);
    });
    it ('addProduct update productList success', () => {
      expect(order.getProductList()).toHaveLength(1);
      expect(order.getProductList()).toEqual([data]);
    });
  });

  describe('get product', () => {
    const order = new Order([data]);
    jest.spyOn(Order.prototype, 'getProduct');
    const product = order.getProduct('1');
    it('removeProduct has been called', () => {
      expect(order.getProduct).toBeCalledTimes(1);
      expect(order.getProduct).toBeCalledWith('1');
    });
    it('removeProduct success', () => {
      expect(product).toEqual(data);
    });
  });

  describe('remove product', () => {
    const order = new Order([data]);
    jest.spyOn(Order.prototype, 'removeProduct');
      order.removeProduct('1');
    it('removeProduct has been called', () => {
      expect(order.removeProduct).toBeCalledTimes(1);
      expect(order.removeProduct).toBeCalledWith('1');
    });
    it('removeProduct success', () => {
      expect(order.getProductList()).toEqual([]);
    });
  });

  describe('update product', () => {
    const order = new Order([data]);
    jest.spyOn(Order.prototype, 'updateProduct');
      order.updateProduct(dataUpdate);
    it('updateProduct has been called', () => {
      expect(order.updateProduct).toBeCalledTimes(1);
      expect(order.updateProduct).toBeCalledWith(dataUpdate);
    });
    it('updateProduct success', () => {
      expect(order.getProductList()).toEqual([dataUpdate]);
    });
  });

  describe('getTotalPayment', () => {
    const order = new Order([data]);
    jest.spyOn(Order.prototype, 'getTotalPayment');
    order.getTotalPayment();
    it('getTotalPayment has been called', () => {
      expect(order.getTotalPayment).toBeCalledTimes(1);
      expect(order.getTotalPayment).toBeCalledWith();
    });

    it('getTotalPayment success', () => {
      expect(order.getTotalPayment()).toEqual(22500);
    });
  });
});
