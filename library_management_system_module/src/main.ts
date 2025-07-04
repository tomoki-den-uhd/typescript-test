import { getOriginalNode } from "typescript";
import { Books } from "./books.js";
const book = new Books("青い壺", "有吉佐和子", 0);

book.displayInfo();
book.borrowBook();
