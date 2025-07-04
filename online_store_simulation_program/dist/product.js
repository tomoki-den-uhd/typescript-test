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
    displayInfo() {
        return `商品ID:${this.productId}\n消費名:${this.productName}\n商品価格:${this.price}商品在庫${this.inventory}`;
    }
    decreaseStock() {
        return (this.inventory -= this.inventory);
    }
}
