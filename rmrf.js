const fs = require("fs");
const path = require("path");

function rmrf(dir) {
  let totalSize = 0;

  // get an array of all files in the current directory
  const files = fs.readdirSync(dir);

  for (const file in files) {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      totalSize += rmrf(filePath);
    } else {
      totalSize += fs.statSync(filePath).size;
      fs.unlinkSync(filePath);
    }
  }

  // all that should remain at this point are empty folders
  const emptyFolders = fs.readdirSync(dir);

  emptyFolders.forEach(folder => fs.rmdirSync(path.join(dir, folder)));

  fs.rmdirSync(path.join(dir));
  return totalSize;
}

module.exports = rmrf;
