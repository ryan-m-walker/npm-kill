const path = require('path');

const rmrf = require('./rmrf');

console.log(rmrf(path.join(__dirname, 'test')));
