const viewStatement = require("./viewStatement");

/* globals display:true */

describe(viewStatement, () => {
  beforeEach(() => {
    display = new viewStatement();
  });

  describe(viewStatement, () => {
    it("prints out a bank statement", () => {
      const logSpy = jest.spyOn(console, "log");

      const accountLog = [["20/05/2022", 500, null, 1000]];
      display.printStatement(accountLog);
      expect(logSpy).toHaveBeenCalledWith("20/05/2022");
      expect(logSpy).toHaveBeenCalledWith(500);
      expect(logSpy).toHaveBeenCalledWith(null);
      expect(logSpy).toHaveBeenCalledWith(1000);
    });
  });
});
