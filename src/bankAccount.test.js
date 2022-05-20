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
      expect(account.credit(500)).toEqual(500);
    });

    it("decreases balance by specific amount", () => {
      account.credit(1000);
      expect(account.debit(500)).toEqual(500);
    });
  });
});
