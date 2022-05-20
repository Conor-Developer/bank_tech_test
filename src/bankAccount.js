class bankAccount {
  constructor() {
    this.balance = 0;
  }

  credit(num) {
    return (this.balance += num);
  }

  debit(num) {
    return (this.balance -= num);
  }

  dateFormat() {}
}

module.exports = bankAccount;
