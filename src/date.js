class dateFormat {
  todaysDate() {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getYear();

    return `${day}/${month}/${year}`;
  }
}

module.exports = dateFormat;
