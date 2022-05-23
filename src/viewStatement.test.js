const viewStatement = require("./viewStatement");

/* globals display:true */

describe(viewStatement, () => {
  beforeEach(() => {
    display = new viewStatement();
  });

  describe("formatStatement", () => {
    it("formats a bank statement", () => {
      const accountLog = [["20/05/2022", 500, null, 1000]];
      display.formatStatement(accountLog);
      expect(display.formattedTransactions).toEqual([
        "20/05/2022 || 500 ||  || 1000",
      ]);
    });
  });

  describe("printStatement", () => {
    it("prints out a bank statement", () => {
      const logSpy = jest.spyOn(console, "log");

      const accountLog = [["20/05/2022", 500, null, 1000]];
      display.formatStatement(accountLog);
      display.printStatement();
      expect(logSpy).toHaveBeenCalledWith("20/05/2022 || 500 ||  || 1000");
    });
  });
});
