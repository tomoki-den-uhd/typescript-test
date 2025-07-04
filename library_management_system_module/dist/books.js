export class Books {
    title;
    author;
    inventory;
    constructor(title, author, inventory) {
        this.title = title;
        this.author = author;
        this.inventory = inventory;
    }
    displayInfo() {
        console.log(`この本のタイトルは${this.title}で著者は${this.author}です`);
        console.log(`残りの在庫数:${this.inventory}`);
    }
    borrowBook() {
        if (this.inventory >= 1) {
            this.inventory - +this.inventory;
            return `${this.title}を貸出しました`;
        }
        else {
            return "在庫切れ";
        }
    }
}
