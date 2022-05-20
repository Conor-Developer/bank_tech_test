const bankAccount = require("./bankAccount");

/* globals account:true */

describe(bankAccount, () => {
  beforeEach(() => {
    account = new bankAccount();
  });

  describe(bankAccount, () => {
    it("creates a bank account", () => {
      expect(account).toBeInstanceOf(bankAccount);
    });

    it("increases balance by specific amount", () => {
      account.deposit(500);
      expect(account.statement[0][3]).toEqual(500);
    });

    it("decreases balance by specific amount", () => {
      account.deposit(1000);
      account.withdrawal(400);
      expect(account.statement[1][3]).toEqual(600);
    });
  });
});
