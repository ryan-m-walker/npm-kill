const chalk = require("chalk");

exports.getBytesUnits = bytes => {
  if (bytes < 9999) {
    return bytes + " bytes";
  } else if (bytes < 999999) {
    return (bytes / 1000).toFixed(2) + " KB";
  } else if (bytes < 999999999) {
    return (bytes / 1000000).toFixed(2) + " MB";
  } else {
    return (bytes / 1000000000).toFixed(2) + " GB";
  }
};

exports.red = (...args) => console.log(chalk.red(...args));
exports.cyan = (...args) => console.log(chalk.cyan(...args));
exports.green = (...args) => console.log(chalk.green(...args));
