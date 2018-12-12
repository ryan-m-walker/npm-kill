#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const program = require('commander');
const chalk = require('chalk');
const emoji = require('node-emoji');

const packageJSON = require('./package.json');
const rmrf = require('./rmrf');
const { getBytesUnits } = require('./helpers');

const red = (...args) => console.log(chalk.red(...args));
const cyan = (...args) => console.log(chalk.cyan(...args));
const green = (...args) => console.log(chalk.green(...args));

const DEFAULT_IGNORE = [];

function kill(arg = '.', command) {
  let count = 0;
  let totalSpace = 0;

  // const IGNORE = [...DEFAULT_IGNORE, ...command.ignore.split(', ')];
  // console.log(IGNORE);

  red('NPM KILL! KILL! KILL!');
  cyan(
    'This might take a long time depending on the number of node_modules folders there are...\n'
  );

  function walkSync(dir) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      if (DEFAULT_IGNORE.includes(file)) {
        return;
      } else if (file === 'node_modules') {
        red(`Encountered a wild node_module at ${dir}! Proceeding to slay!`);
        count += 1;
        console.log('(Recursively deleting all modules...)');
        const moduleSize = rmrf(path.join(dir, 'node_modules'));
        green(emoji.get('skull'), ` node_module succesfully killed!`);
        green(`Cleaned up ${getBytesUnits(moduleSize)} bytes of space!\n`);
        totalSpace += moduleSize;
      } else if (fs.statSync(path.join(dir, file)).isDirectory()) {
        walkSync(path.join(dir, file));
      }
    });
  }

  const dir = path.join(process.cwd(), arg);
  const files = walkSync(dir);

  if (count) {
    green(
      `* ${count} dastardly node_modules have been slain in this blessed campaign! We dance on their graves!`
    );
    green(`* Cleaned up ${getBytesUnits(totalSpace)} of space total!`);
  } else {
    green(
      '* It seems this land is free of those miserable node_modules. None were found.'
    );
  }
}

program
  .version(packageJSON.version)
  .arguments('<directory>')
  .option(
    '-i, --ignore <file or dir to ignore>',
    'Files or directories to ignore'
  )
  .description(
    'Finds and delete all node_modules folders in the provided folder recursively'
  )
  .action(kill)
  .parse(process.argv);
