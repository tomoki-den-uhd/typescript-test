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
        console.log("title", this.title);
        return `この本のタイトルは${this.title}で著者は${this.author}です \n 残りの在庫数は${this.inventory}`;
    }
    borrowBook() {
        if (this.inventory === 0) {
            return `在庫切れ`;
        }
        else {
            return `${this.title}を貸出しました`;
        }
    }
}
;
