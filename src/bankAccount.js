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
    let money = this.#formatInteger(num);
    this.balance += money;
    this.#updateAccountLog(money, "credit");
    return money;
  }

  withdrawal(num) {
    let money = this.#formatInteger(num);
    this.balance -= money;
    this.#updateAccountLog(money, "debit");
    return money;
  }

  #formatInteger(num) {
    let money = num.toFixed(2);
    return parseInt(money, 10);
  }

  #updateAccountLog(num, accountAction) {
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
