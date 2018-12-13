const emoji = require("node-emoji");
const rmrf = require("./rmrf");
const { getBytesUnits, red, green } = require("./helpers");

function walkSync(dir) {
  let count = 0;
  let totalSpace = 0;

  const files = fs.readdirSync(dir);

  for (const file of files) {
    if (file === "node_modules") {
      red(`Encountered a wild node_module at ${dir}! Proceeding to slay!`);
      count += 1;
      console.log("(Recursively deleting all modules...)");
      const moduleSize = rmrf(path.join(dir, "node_modules"));
      green(emoji.get("skull"), ` node_module succesfully killed!`);
      green(`Cleaned up ${getBytesUnits(moduleSize)} of space!\n`);
      totalSpace += moduleSize;
    } else if (fs.statSync(path.join(dir, file)).isDirectory()) {
      const [childCount, childTotalSpace] = walkSync(path.join(dir, file));
      count += childCount;
      totalSpace += childTotalSpace;
    }

    return [count, totalSpace];
  }

  // files.forEach(file => {
  //   if (DEFAULT_IGNORE.includes(file)) {
  //     return;
  //   } else if (file === "node_modules") {
  //     red(`Encountered a wild node_module at ${dir}! Proceeding to slay!`);
  //     count += 1;
  //     console.log("(Recursively deleting all modules...)");
  //     const moduleSize = rmrf(path.join(dir, "node_modules"));
  //     green(emoji.get("skull"), ` node_module succesfully killed!`);
  //     green(`Cleaned up ${getBytesUnits(moduleSize)} bytes of space!\n`);
  //     totalSpace += moduleSize;
  //   } else if (fs.statSync(path.join(dir, file)).isDirectory()) {
  //     walkSync(path.join(dir, file));
  //   }
  // });
}

module.exports = walkSync;
