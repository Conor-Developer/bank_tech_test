class dateFormat {
  todaysDate() {
    const date = new Date();

    const day = date.getDate();

    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
}

module.exports = dateFormat;
