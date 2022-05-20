const dateFormat = require("./date");

class bankAccount {
  constructor() {
    this.statement = [];
    this.balance = 0;
  }

  deposit(num) {
    this.balance += num;
    this.updateAccountLog(num, "credit");
    return num;
  }

  withdrawal(num) {
    this.balance -= num;
    this.updateAccountLog(num, "debit");
    return num;
  }

  updateAccountLog(num, accountAction, date = new dateFormat().todaysDate()) {
    if (accountAction == "credit") {
      this.statement.push([date, num, null, this.balance]);
    } else if (accountAction == "debit") {
      this.statement.push([date, null, num, this.balance]);
    }
  }

  printStatement() {}
}

module.exports = bankAccount;
