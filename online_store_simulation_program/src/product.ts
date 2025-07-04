export class Products {
  productId: number;
  productName: string;
  price: number;
  inventory: number;

  constructor(
    productId: number,
    productName: string,
    price: number,
    inventory: number
  ) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.inventory = inventory;
  }

  displayInfo() {}

  decreaseStock() {}
}
