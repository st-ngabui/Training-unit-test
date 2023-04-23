type Discount = {
  percent: number;
  number: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  number: number;
  discount: Discount[];
}

class ProductOrder implements Product {
  id: string;
  name: string;
  price: number;
  number: number;
  discount: Discount[];
  constructor(data: Product) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.number = data.number;
    this.discount = [...data.discount];
  }
  getAppliedDiscount() {
    let discount = 0;
      this.discount.forEach((item: Discount) => {
        if (this.number >= item.number && item.percent > discount) {
          discount = item.percent;
        }
      });
    return discount;
  }
  getTotalPrice() {
    return this.price * this.number * (100 - this.getAppliedDiscount()) / 100;
  }
}

export class Order {
  productList: Product[] = [];

  constructor(data: Product[]) {
    this.productList = [...data];
  }

  getProductList() {
    return this.productList;
  }
  addProduct(product: Product) {
    this.productList.push(product);
  }
  getProduct(id: string) {
    return this.productList.find((item: Product) => item.id === id);
  }
  removeProduct(id: string) {
    this.productList = this.productList.filter((item: Product) => item.id !== id );
  }

  updateProduct(product: Product) {
    this.productList = this.productList.map((item: Product) => {
      if (item.id === product.id) {
        return product;
      }
      return item;
    });
  }

  getTotalPayment() {
    return this.productList.reduce((sum, product: Product) => {
      const productOrder = new ProductOrder(product);
      return sum + productOrder.getTotalPrice();
    }, 0);
  }

}
