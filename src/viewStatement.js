class viewStatement {
  constructor() {
    this.formattedTransactions = [];
  }

  formatStatement(accountLog) {
    let singleTransaction = "";

    accountLog.forEach(
      (transaction) => (
        (singleTransaction = transaction.toString().replace(/,/gi, " || ")),
        this.formattedTransactions.push(singleTransaction)
      )
    );
  }

  printStatement() {
    console.log("date || credit || debit || balance");
    this.formattedTransactions.forEach((transaction) =>
      console.log(transaction)
    );
    this.clearFormattedTransactionsLog();
  }

  clearFormattedTransactionsLog() {
    return (this.formattedTransactions = []);
  }
}

module.exports = viewStatement;
