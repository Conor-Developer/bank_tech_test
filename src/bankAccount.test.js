const bankAccount = require("./bankAccount");
const viewStatement = require("./viewStatement");
const dateFormat = require("./date");

jest.mock("./viewStatement");
jest.mock("./date");

/* globals account:true */

describe(bankAccount, () => {
  beforeEach(() => {
    viewStatement.mockClear();
    dateFormat.mockClear();
    display = new viewStatement();
    date = new dateFormat();
    account = new bankAccount(display, date);
  });

  describe(bankAccount, () => {
    it("creates a bank account", () => {
      const myAccount = new bankAccount();
      expect(myAccount).toBeInstanceOf(bankAccount);
    });
  });

  describe("deposit", () => {
    it("increases balance by specific amount", () => {
      account.date.todaysDate.mockImplementation(() => "23/05/2022");
      account.deposit(500);
      expect(account.statement[0][3]).toEqual(500);
    });
  });

  describe("withdrawal", () => {
    it("increases balance", () => {
      account.date.todaysDate.mockImplementation(() => "23/05/2022");
      account.withdrawal(400);
      expect(account.balance).toEqual(-400);
    });

    it("increase and decrease balance", () => {
      account.date.todaysDate.mockImplementation(() => "23/05/2022");
      account.deposit(1000);
      account.withdrawal(400);
      expect(account.balance).toEqual(600);
    });

    describe("printStatement", () => {
      it("prints the bank statement", () => {
        account.display.formatStatement.mockImplementation(() => null);
        account.display.printStatement.mockImplementation(() =>
          console.log("20/05/2022 || 500 ||  || 1000")
        );

        const logSpy = jest.spyOn(console, "log");

        account.deposit(500);

        account.printStatement();
        expect(account.display.formatStatement).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith("20/05/2022 || 500 ||  || 1000");
      });
    });
  });
});
