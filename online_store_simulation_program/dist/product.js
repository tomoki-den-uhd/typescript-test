export class Products {
    productId;
    productName;
    price;
    inventory;
    constructor(productId, productName, price, inventory) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.inventory = inventory;
    }
    displayInfo() { }
    decreaseStock() { }
}
