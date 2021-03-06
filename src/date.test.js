const dateFormat = require("./date");

/* globals date:true, dayMonthYear:true */

describe(dateFormat, () => {
  beforeEach(() => {
    date = new dateFormat();

    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const year = currentDate.getFullYear();

    dayMonthYear = `${day}/${month}/${year}`;
  });

  describe(dateFormat, () => {
    it("provides the ", () => {
      expect(date.todaysDate()).toEqual(dayMonthYear);
    });
  });
});
