export class Users {
  userId: number;
  userAddress: string;
  userName: string;

  constructor(userId: number, userAddress: string, userName: string) {
    this.userId = userId;
    this.userAddress = userAddress;
    this.userName = userName;
  }

  displayInfo() {}
}
