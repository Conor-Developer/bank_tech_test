const dateFormat = require("./date");
const viewStatement = require("./viewStatement");

class bankAccount {
  constructor(display = new viewStatement()) {
    this.display = display;
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

  updateAccountLog(num, accountAction, date = new dateFormat().todaysDate()) {
    if (accountAction === "credit") {
      this.statement.push([date, num, null, this.balance]);
    } else if (accountAction === "debit") {
      this.statement.push([date, null, num, this.balance]);
    }
  }

  printStatement() {
    this.display.formatStatement(this.statement);
    this.display.printStatement();
  }
}

module.exports = bankAccount;
