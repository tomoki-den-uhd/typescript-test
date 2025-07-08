import { Product } from "./product.js";
import { User } from "./user.js";
import { processPurchase } from "./purchase.js";
export const product = new Product(1, "歯ブラシ", 300, 2);
export const user = new User(1, "test@test.com", "田中");
product.displayInfo();
user.displayInfo();
processPurchase(user, product);
