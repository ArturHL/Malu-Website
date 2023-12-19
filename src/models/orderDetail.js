export default class OrderDetail {
  constructor(id, order_id, product_id, quantity, price) {
    this.id = id;
    this.order_id = order_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.price = price;
  }
}