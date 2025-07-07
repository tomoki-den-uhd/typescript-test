import { Products } from "./product.js";
import { Users } from "./user.js";
import { processPurchase } from "./purchase.js";

export const product = new Products(1, "歯ブラシ", 300, 2);
export const user = new Users(1, "test@test.com", "田中");

product.displayInfo();
user.displayInfo();

processPurchase(user, product);


