#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const program = require("commander");

const packageJSON = require("./package.json");

const { getBytesUnits, red, cyan, green } = require("./helpers");

// const DEFAULT_IGNORE = [];

function kill(arg = ".", command) {
  // let count = 0;
  // let totalSpace = 0;

  // const IGNORE = [...DEFAULT_IGNORE, ...command.ignore.split(', ')];
  // console.log(IGNORE);

  red("NPM KILL! KILL! KILL!");
  cyan(
    "This might take a long time depending on the number of node_modules folders there are...\n"
  );

  const dir = path.join(process.cwd(), arg);
  const [count, totalSpace] = walkSync(dir);

  if (count) {
    green(
      `* ${count} dastardly node_modules have been slain in this blessed campaign! We dance on their graves!`
    );
    green(`* Cleaned up ${getBytesUnits(totalSpace)} of space total!`);
  } else {
    green(
      "* It seems this land is free of those miserable node_modules. None were found."
    );
  }
}

program
  .version(packageJSON.version)
  .arguments("<directory>")
  .option(
    "-i, --ignore <file or dir to ignore>",
    "Files or directories to ignore"
  )
  .description(
    "Finds and delete all node_modules folders in the provided folder recursively"
  )
  .action(kill)
  .parse(process.argv);
