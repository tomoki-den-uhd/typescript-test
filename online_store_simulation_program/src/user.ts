export class Users {
  userId: number;
  userAddress: string;
  userName: string;

  constructor(userId: number, userAddress: string, userName: string) {
    this.userId = userId;
    this.userAddress = userAddress;
    this.userName = userName;
  }

  displayInfo() {
    return console.log(
      `ユーザID:${this.userId}\nユーザアドレス:${this.userAddress}\nユーザネーム:${this.userName}`
    );
    // return `ユーザID:${this.userId}\nユーザアドレス:${this.userAddress}\nユーザネーム:${this.userName}`;
  }
}
