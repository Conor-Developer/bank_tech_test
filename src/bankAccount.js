const dateFormat = require("./date");
const viewStatement = require("./viewStatement");

class bankAccount {
  constructor(display = new viewStatement(), date = new dateFormat()) {
    this.display = display;
    this.date = date;
    this.statement = [];
    this.balance = 0.0;
  }

  deposit(num) {
    num = num.toFixed(2);
    let money = parseInt(num, 10);
    this.balance += money;
    this.updateAccountLog(money, "credit");
    return money;
  }

  withdrawal(num) {
    num = num.toFixed(2);
    this.balance -= num;
    this.updateAccountLog(num, "debit");
    return num;
  }

  updateAccountLog(num, accountAction) {
    if (accountAction === "credit") {
      this.statement.unshift([this.date.todaysDate(), num, null, this.balance]);
    } else {
      this.statement.unshift([this.date.todaysDate(), null, num, this.balance]);
    }
  }

  printStatement() {
    this.display.formatStatement(this.statement);
    this.display.printStatement();
  }
}

module.exports = bankAccount;
