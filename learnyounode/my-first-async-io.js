"use strict";
const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    return err;
  } else {
    let temp = data.toString().split("\n").length - 1;
    console.log(temp);
  }
});
