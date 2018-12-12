const fs = require('fs');
const path = require('path');

function rmrf(dir) {
  let totalSize = 0;

  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      totalSize += rmrf(path.join(dir, file));
    } else {
      const { size } = fs.statSync(path.join(dir, file));
      totalSize += size;
      fs.unlinkSync(path.join(dir, file));
    }
  });

  const emptyFolders = fs.readdirSync(dir);
  // console.log(emptyFolders);
  emptyFolders.forEach((folder) => fs.rmdirSync(path.join(dir, folder)));
  fs.rmdirSync(path.join(dir));
  return totalSize;
}

module.exports = rmrf;
