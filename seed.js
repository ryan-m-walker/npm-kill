'use strict';

const fs = require('fs');
const path = require('path');

const FIRST_NODE = path.join(__dirname, './test/node_modules');

if (!fs.existsSync(FIRST_NODE)) {
  fs.mkdirSync(path.join(__dirname, './test/node_modules'));
  fs.writeFileSync(
    path.join(__dirname, './test/node_modules/file1.txt'),
    'testtest'
  );
  fs.writeFileSync(
    path.join(__dirname, './test/node_modules/file2.txt'),
    'test'
  );
  // fs.mkdirSync(path.join(__dirname, './test/inner'));
  fs.mkdirSync(path.join(__dirname, './test/inner/node_modules'));
  fs.writeFileSync(
    path.join(__dirname, './test/inner/node_modules/file2.txt'),
    'test'
  );
}
