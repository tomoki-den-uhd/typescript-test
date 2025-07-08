export class User {
    userId;
    userAddress;
    userName;
    constructor(userId, userAddress, userName) {
        this.userId = userId;
        this.userAddress = userAddress;
        this.userName = userName;
    }
    displayInfo() {
        return console.log(`ユーザID:${this.userId}\nユーザアドレス:${this.userAddress}\nユーザネーム:${this.userName}`);
    }
}
